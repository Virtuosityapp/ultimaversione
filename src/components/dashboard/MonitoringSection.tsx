
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts";
import { Eye, Globe, Target } from 'lucide-react';

interface CategoryData {
  category: string;
  mascot: string;
  icon: React.ReactNode;
  data: {
    tipo: string;
    count: number;
    trend: string;
    action: string;
  }[];
  chartData: {
    name: string;
    value: number;
    color: string;
  }[];
  trendData: {
    month: string;
    count: number;
  }[];
}

interface MonitoringSectionProps {
  title: string;
  description: string;
  categories: CategoryData[];
  icon: React.ReactNode;
  chartType: 'pie' | 'bar';
  gradientFrom: string;
  gradientTo: string;
  prefix: string;
}

const MonitoringSection = ({ 
  title, 
  description, 
  categories, 
  icon, 
  chartType, 
  gradientFrom, 
  gradientTo, 
  prefix 
}: MonitoringSectionProps) => {
  const chartConfig = {
    value: {
      label: "Certificati",
      color: "#3b82f6",
    },
  };

  const trendConfig = {
    count: {
      label: "Certificati",
      color: "#10b981",
    },
  };

  return (
    <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardHeader className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-t-lg`}>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription className="text-opacity-90">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category, categoryIndex) => (
            <AccordionItem key={categoryIndex} value={`${prefix}-item-${categoryIndex}`}>
              <AccordionTrigger className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={category.mascot} 
                    alt={category.category}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {category.icon}
                  <span>{category.category}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {/* Chart */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Distribuzione Certificati</h4>
                    <ChartContainer config={chartConfig} className="h-64">
                      {chartType === 'pie' ? (
                        <PieChart>
                          <Pie
                            data={category.chartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                          >
                            {category.chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      ) : (
                        <BarChart data={category.chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                      )}
                    </ChartContainer>
                  </div>

                  {/* Trend Line Chart */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Trend Mensile</h4>
                    <ChartContainer config={trendConfig} className="h-48">
                      <LineChart data={category.trendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="count" stroke="var(--color-count)" strokeWidth={2} />
                      </LineChart>
                    </ChartContainer>
                  </div>

                  {/* Actions Summary */}
                  <div className="grid gap-2">
                    {category.data.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-xs font-medium">{item.tipo}</span>
                        <Badge variant="outline" className="text-xs">
                          <Target className="h-3 w-3 mr-1" />
                          {item.action}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default MonitoringSection;
