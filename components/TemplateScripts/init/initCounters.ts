// src/lib/initCounters.ts
import type { CountUp } from "countup.js";

type CounterConfig = {
  id: string;
  endVal: number;
  options?: CountUpOptions;
};

type CountUpOptions = {
  decimalPlaces?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  enableScrollSpy?: boolean;
  scrollSpyDelay?: number;
  scrollSpyOnce?: boolean;
};

export async function initCounters() {
  const { CountUp } = await import("countup.js");

  // ✅ options same as your template
  const optionsPercent: CountUpOptions = { suffix: "%", enableScrollSpy: true };
  const optionsPlus: CountUpOptions = { suffix: "+", enableScrollSpy: true };

  const counters: Array<InstanceType<typeof CountUp>> = [];

  const configs: CounterConfig[] = [
    { id: "stats-counter-1", endVal: 5, options: optionsPlus },
    { id: "stats-counter-2", endVal: 50, options: optionsPlus },
    { id: "stats-counter-3", endVal: 100, options: optionsPlus },
    { id: "stats-counter-4", endVal: 70, options: optionsPlus },
  ];

  configs.forEach(({ id, endVal, options }) => {
    const el = document.getElementById(id);
    if (!el) return;

    const cu = new CountUp(id, endVal, options as any);

    // if there is an error, don't crash
    if ((cu as any).error) return;

    counters.push(cu);

    // If scrollSpy enabled, CountUp will start when visible.
    // If not using scrollSpy, call start()
    if (!options?.enableScrollSpy) cu.start();
  });

  // cleanup (CountUp has no official destroy; just reset)
  return () => {
    counters.forEach((c) => c.reset());
  };
}