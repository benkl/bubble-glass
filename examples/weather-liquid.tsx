import { LiquidGlassCard } from '@/components/ui/liquid-glass';
import {
  Cloud,
  CloudRain,
  CloudSun,
  CloudSunRain,
  MapPin,
  Sun,
} from 'lucide-react';

const GLASS = {
  shadowIntensity: 'xs' as const,
  borderRadius: '8px',
  glowIntensity: 'none' as const,
};

interface ForecastHour {
  time: string;
  icon: React.ElementType;
  fill?: boolean;
  temp: string;
}

interface ForecastDay {
  icon: React.ElementType;
  fill?: boolean;
  label: string;
  range: string;
}

const hours: ForecastHour[] = [
  { time: '16:00', icon: Cloud, fill: true, temp: '+18°' },
  { time: '17:00', icon: Cloud, fill: true, temp: '+18°' },
  { time: '18:00', icon: CloudRain, temp: '+16°' },
  { time: '19:00', icon: CloudRain, temp: '+14°' },
  { time: '20:00', icon: CloudSun, fill: true, temp: '+15°' },
  { time: '21:00', icon: CloudSunRain, temp: '+14°' },
];

const days: ForecastDay[] = [
  { icon: Sun, fill: true, label: 'Tue, 7 Sep', range: '+18°/+4°' },
  { icon: Cloud, fill: true, label: 'Wed, 8 Sep', range: '+20°/+6°' },
  { icon: CloudRain, label: 'Thu, 9 Sep', range: '+17°/+3°' },
  { icon: Sun, fill: true, label: 'Fri, 10 Sep', range: '+22°/+10°' },
  { icon: CloudRain, label: 'Sat, 11 Sep', range: '+16°/+5°' },
];

function HourSlot({ time, icon: Icon, fill, temp }: ForecastHour) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span>{time}</span>
      <Icon className={`h-6 w-6${fill ? ' fill-white' : ''}`} />
      <span>{temp}</span>
    </div>
  );
}

function DayRow({ icon: Icon, fill, label, range }: ForecastDay) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className={`h-6 w-6${fill ? ' fill-white' : ''}`} />
        <span>{label}</span>
      </div>
      <span className="text-lg">{range}</span>
    </div>
  );
}

export default function WeatherLiquid() {
  return (
    <div
      className="relative z-30 w-full rounded-xl p-8 py-16"
      style={{
        background:
          'url("https://images.unsplash.com/photo-1590867286251-8e26d9f255c0?q=80&w=687&auto=format&fit=crop") center / cover no-repeat',
      }}
    >
      <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-4">
        {/* Hourly forecast */}
        <LiquidGlassCard
          {...GLASS}
          className="col-span-2 bg-white/8 p-6 text-white"
        >
          <div className="relative z-30 flex justify-between text-sm font-medium">
            {hours.map((h) => (
              <HourSlot key={h.time} {...h} />
            ))}
          </div>
        </LiquidGlassCard>

        {/* Current weather */}
        <LiquidGlassCard
          {...GLASS}
          className="rounded-3xl bg-white/8 p-6 text-white"
        >
          <div className="relative z-30 flex h-full w-full flex-col items-start justify-center">
            <div className="text-6xl font-semibold">+18°C</div>
            <div className="text-lg">Cloudy +18°/+5°</div>
          </div>
        </LiquidGlassCard>

        {/* Time & location */}
        <LiquidGlassCard
          {...GLASS}
          className="rounded-3xl bg-white/8 p-6 text-white"
        >
          <div className="relative z-30 flex h-full w-full flex-col items-start justify-center">
            <div className="text-6xl font-semibold">17:32</div>
            <div className="text-lg">Sun, November 19</div>
            <button className="mt-4 inline-flex items-center gap-1 rounded-full bg-black/10 px-2 py-1 text-sm font-medium backdrop-blur-xl">
              <MapPin className="h-4 w-4" />
              Tbilisi
            </button>
          </div>
        </LiquidGlassCard>

        {/* Daily forecast */}
        <LiquidGlassCard
          {...GLASS}
          className="col-span-2 rounded-3xl bg-white/8 p-6 text-white"
        >
          <div className="relative z-30 flex h-full w-full flex-col gap-4">
            {days.map((d) => (
              <DayRow key={d.label} {...d} />
            ))}
          </div>
        </LiquidGlassCard>
      </div>
    </div>
  );
}
