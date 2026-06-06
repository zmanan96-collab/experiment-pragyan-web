'use client';

import { useState, useRef, useEffect } from 'react';

interface DataPoint {
  month: string;
  impressions: number;
  clicks: number;
  uniqueReached: number;
  engagementRate: number;
}

export interface InteractiveStatsDashboardProps {
  monthlyData: DataPoint[];
  totalImpressions: string;
  totalUniqueReached: string;
  totalClicks: string;
  overallEngagementRate: string;
}

export default function InteractiveStatsDashboard({
  monthlyData,
  totalImpressions,
  totalUniqueReached,
  totalClicks,
  overallEngagementRate
}: InteractiveStatsDashboardProps) {
  const [activeMetric, setActiveMetric] = useState<keyof DataPoint>('impressions');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const METRICS = [
    { id: 'impressions' as keyof DataPoint, label: 'Organic Impressions', total: totalImpressions, suffix: '', color: '#4B3FD4', gradient: ['#4B3FD4', '#786CF0'] },
    { id: 'uniqueReached' as keyof DataPoint, label: 'Unique Accounts Reached', total: totalUniqueReached, suffix: '', color: '#1E1F65', gradient: ['#1E1F65', '#4B3FD4'] },
    { id: 'clicks' as keyof DataPoint, label: 'Organic Clicks', total: totalClicks, suffix: '', color: '#10B981', gradient: ['#10B981', '#34D399'] },
    { id: 'engagementRate' as keyof DataPoint, label: 'Engagement Rate', total: overallEngagementRate, suffix: '%', color: '#F59E0B', gradient: ['#F59E0B', '#FBBF24'] }
  ];

  const activeMetricConfig = METRICS.find(m => m.id === activeMetric) ?? METRICS[0];

  // Chart bounds & scales configuration
  const svgWidth = 800;
  const svgHeight = 350;
  const paddingLeft = 60;
  const paddingRight = 40;
  const paddingTop = 40;
  const paddingBottom = 40;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  // Extract values of active metric
  const values = monthlyData.map(d => d[activeMetric] as number);
  const maxValue = Math.max(...values);
  const minValue = 0; // Start axes from 0 for clear representation
  const valueRange = maxValue - minValue;

  // Calculate coordinates for points
  const points = monthlyData.map((d, i) => {
    const x = paddingLeft + (i / (monthlyData.length - 1)) * chartWidth;
    const val = d[activeMetric] as number;
    const y = paddingTop + chartHeight - ((val - minValue) / (valueRange || 1)) * chartHeight;
    return { x, y, value: val, month: d.month, raw: d };
  });

  // SVG Path generation (smooth curve)
  const getLinePath = () => {
    if (points.length === 0) return '';
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      // Control points for cubic bezier curves
      const cpX1 = curr.x + (next.x - curr.x) / 3;
      const cpY1 = curr.y;
      const cpX2 = curr.x + 2 * (next.x - curr.x) / 3;
      const cpY2 = next.y;
      path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }
    return path;
  };

  const getAreaPath = () => {
    const linePath = getLinePath();
    if (!linePath) return '';
    return `${linePath} L ${points[points.length - 1].x} ${paddingTop + chartHeight} L ${points[0].x} ${paddingTop + chartHeight} Z`;
  };

  // Hover/touch handler
  const handleMove = (clientX: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const xVal = ((clientX - rect.left) / rect.width) * svgWidth;

    // Find closest index based on X coordinate
    let closestIndex = 0;
    let minDistance = Infinity;

    points.forEach((pt, i) => {
      const dist = Math.abs(pt.x - xVal);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = i;
      }
    });

    setHoverIndex(closestIndex);

    // Calculate tooltip coordinates inside SVG client bounds
    const hoverPoint = points[closestIndex];
    const tooltipX = rect.left + (hoverPoint.x / svgWidth) * rect.width;
    const tooltipY = rect.top + (hoverPoint.y / svgHeight) * rect.height - 110;

    setTooltipPos({ x: tooltipX, y: tooltipY });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  // Format metric value for axis & tooltips
  const formatVal = (val: number, id: keyof DataPoint) => {
    if (id === 'engagementRate') return `${val.toFixed(2)}%`;
    return val.toLocaleString();
  };

  // Format Y-axis gridline labels
  const getGridlines = () => {
    const lines = 4;
    return Array.from({ length: lines + 1 }).map((_, i) => {
      const val = minValue + (valueRange / lines) * i;
      const y = paddingTop + chartHeight - (i / lines) * chartHeight;
      return { val, y };
    });
  };

  return (
    <div ref={containerRef} className="w-full select-none">
      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {METRICS.map((metric) => {
          const isActive = activeMetric === metric.id;
          return (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none ${
                isActive
                  ? 'bg-white border-black shadow-[0_10px_30px_rgba(0,0,0,0.05)] scale-[1.02]'
                  : 'bg-white/80 border-[#76777b]/15 hover:border-black/40 hover:bg-white'
              }`}
            >
              <span className="text-[11px] md:text-xs font-bold text-[#555] uppercase tracking-wider block mb-2">
                {metric.label}
              </span>
              <span
                className="text-2xl md:text-3xl font-light tracking-tight leading-none"
                style={{ color: isActive ? metric.color : '#1a1c1c' }}
              >
                {metric.total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chart Wrapper with floating layout */}
      <div className="relative bg-white border border-[#76777b]/15 rounded-xl p-4 md:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="w-full overflow-hidden">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            width="100%"
            height="100%"
            className="overflow-visible"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleMouseLeave}
          >
            <defs>
              {/* Main Line Gradient */}
              <linearGradient id={`gradient-${activeMetric}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={activeMetricConfig.gradient[0]} />
                <stop offset="100%" stopColor={activeMetricConfig.gradient[1]} />
              </linearGradient>

              {/* Area Under-Fill Gradient */}
              <linearGradient id={`area-gradient-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={activeMetricConfig.color} stopOpacity="0.15" />
                <stop offset="100%" stopColor={activeMetricConfig.color} stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Gridlines & Y-Axis Labels */}
            {getGridlines().map((gl, i) => (
              <g key={i} className="opacity-70">
                <line
                  x1={paddingLeft}
                  y1={gl.y}
                  x2={svgWidth - paddingRight}
                  y2={gl.y}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingLeft - 12}
                  y={gl.y + 4}
                  textAnchor="end"
                  className="font-space text-[10px] fill-[#71717a] font-normal"
                >
                  {formatVal(gl.val, activeMetric)}
                </text>
              </g>
            ))}

            {/* X-Axis Labels */}
            {points.map((pt, i) => (
              <text
                key={i}
                x={pt.x}
                y={paddingTop + chartHeight + 24}
                textAnchor="middle"
                className="font-space text-[10px] fill-[#71717a] font-normal hidden sm:block"
              >
                {pt.month}
              </text>
            ))}

            {/* Render condensed month labels for mobile */}
            {points.filter((_, idx) => idx % 2 === 0).map((pt, i) => (
              <text
                key={`mob-${i}`}
                x={pt.x}
                y={paddingTop + chartHeight + 24}
                textAnchor="middle"
                className="font-space text-[10px] fill-[#71717a] font-normal sm:hidden"
              >
                {pt.month.split(' ')[0]}
              </text>
            ))}

            {/* Filled Area */}
            <path
              d={getAreaPath()}
              fill={`url(#area-gradient-${activeMetric})`}
              className="transition-all duration-500 ease-out"
            />

            {/* Smooth Curve Line */}
            <path
              d={getLinePath()}
              fill="none"
              stroke={`url(#gradient-${activeMetric})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 ease-out"
            />

            {/* Interactive vertical hover indicator */}
            {hoverIndex !== null && (
              <line
                x1={points[hoverIndex].x}
                y1={paddingTop}
                x2={points[hoverIndex].x}
                y2={paddingTop + chartHeight}
                stroke="#64748b"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                className="pointer-events-none"
              />
            )}

            {/* Anchor points / Nodes */}
            {points.map((pt, i) => {
              const isHovered = hoverIndex === i;
              return (
                <g key={i} className="pointer-events-none">
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? 7 : 4}
                    fill={isHovered ? activeMetricConfig.color : '#ffffff'}
                    stroke={activeMetricConfig.color}
                    strokeWidth={isHovered ? 3 : 2}
                    className="transition-all duration-150 ease-out"
                  />
                  {isHovered && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="12"
                      fill={activeMetricConfig.color}
                      fillOpacity="0.15"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* HTML Tooltip Box on hover (pinned/fixed placement or absolute floating relative to page) */}
        {hoverIndex !== null && (
          <div
            className="absolute z-40 bg-white/95 backdrop-blur-md border border-[#1a1c1c]/10 rounded-lg p-3 shadow-xl pointer-events-none transition-all duration-100 flex flex-col gap-1.5 min-w-[200px]"
            style={{
              left: `${((points[hoverIndex].x - 100) / svgWidth) * 100}%`,
              bottom: '105%',
              transform: 'translateX(0)'
            }}
          >
            <div className="text-[11px] font-bold text-[#888] uppercase tracking-wider pb-1 border-b border-black/5">
              {monthlyData[hoverIndex].month}
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#555]">Impressions:</span>
              <span className="font-semibold text-[#1a1c1c]">
                {formatVal(monthlyData[hoverIndex].impressions, 'impressions')}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#555]">Unique Reached:</span>
              <span className="font-semibold text-[#1a1c1c]">
                {formatVal(monthlyData[hoverIndex].uniqueReached, 'uniqueReached')}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#555]">Clicks:</span>
              <span className="font-semibold text-[#1a1c1c]">
                {formatVal(monthlyData[hoverIndex].clicks, 'clicks')}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#555]">Engagement Rate:</span>
              <span className="font-semibold text-[#1a1c1c]">
                {formatVal(monthlyData[hoverIndex].engagementRate, 'engagementRate')}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
