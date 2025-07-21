"use client"

import { useState } from "react"

// LeetCode username
const LEETCODE_USERNAME = "TripathiTanmay"

// LeetCard API endpoints
const LEETCARD_HEATMAP = `https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?cache=0&ext=heatmap`

export function LeetCodeChart() {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {/* LeetCard Heatmap */}
      <div className="p-4 border rounded-lg bg-card/50">
        <div className="text-sm font-medium mb-3 text-center">LeetCode Activity Heatmap</div>
        <div className="flex justify-center">
          <img
            src={LEETCARD_HEATMAP}
            alt={`${LEETCODE_USERNAME} LeetCode Heatmap`}
            className="rounded-lg max-w-full h-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              setError("Heatmap temporarily unavailable")
            }}
            onLoad={() => setError(null)}
          />
        </div>
        {error && (
          <div className="text-center text-sm text-muted-foreground mt-2">
            {error} - Visit{" "}
            <a 
              href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LeetCode Profile
            </a>{" "}
            for live stats
          </div>
        )}
      </div>
    </div>
  )
}
