"use client";

import { useEffect, useState } from "react";

const TZ = "Asia/Kolkata";

function istParts(date: Date) {
  const p = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    hourCycle: "h23",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).formatToParts(date);
  const get = (t: string) => Number(p.find((x) => x.type === t)?.value || 0);
  return { h: get("hour"), m: get("minute"), s: get("second") };
}

export default function ClayClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = now ? istParts(now) : { h: 0, m: 0, s: 0 };
  const hourDeg = ((t.h % 12) + t.m / 60) * 30;
  const minDeg = (t.m + t.s / 60) * 6;
  const secDeg = t.s * 6;
  const isDay = t.h >= 6 && t.h < 19;
  const digital = now
    ? now.toLocaleTimeString("en-IN", {
        timeZone: TZ,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "--:--";
  const day = now
    ? now.toLocaleDateString("en-IN", {
        timeZone: TZ,
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "";

  return (
    <div className="clock-card clay h-full flex flex-col justify-between items-center" role="img" aria-label={`Local time in Bangalore: ${digital}`}>
      <div className="clock-ring clay tint sky">
        <div className="clock-face">
          {Array.from({ length: 12 }, (_, i) => (
            <span
              key={i}
              className={`tick ${i % 3 === 0 ? "major" : ""}`}
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
          <span className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }} />
          <span className="hand minute" style={{ transform: `rotate(${minDeg}deg)` }} />
          <span className="hand second" style={{ transform: `rotate(${secDeg}deg)` }} />
          <span className="pivot" />
        </div>
      </div>
      <div className="clock-info">
        <strong className="clock-time">{digital}</strong>
        <span className="clock-place">Bangalore, India · IST</span>
        <span className="clock-day">{day}</span>
      </div>
      <span className={`pill tint ${isDay ? "butter" : "sky"}`}>
        {isDay ? "Daytime in Bangalore" : "Night in Bangalore"}
      </span>
    </div>
  );
}
