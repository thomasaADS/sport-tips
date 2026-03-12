"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TipCard, { Tip } from "@/components/TipCard";
import StatsSection from "@/components/StatsSection";
import LeaguesSection from "@/components/LeaguesSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";

const tips: Tip[] = [
  {
    id: 1,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05E4\u05E8\u05DE\u05D9\u05D9\u05E8 \u05DC\u05D9\u05D2",
    leagueFlag: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F",
    homeTeam: "\u05DE\u05E0\u05E6'\u05E1\u05D8\u05E8 \u05E1\u05D9\u05D8\u05D9",
    awayTeam: "\u05D0\u05E8\u05E1\u05E0\u05DC",
    time: "22:00",
    recommendation: "\u05DE\u05E2\u05DC 2.5 \u05E9\u05E2\u05E8\u05D9\u05DD",
    odds: "1.85",
    confidence: 82,
    analysis:
      "\u05E9\u05EA\u05D9 \u05D4\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D1\u05E4\u05D5\u05E8\u05DD \u05DE\u05E6\u05D5\u05D9\u05DF. 4 \u05DE\u05EA\u05D5\u05DA 5 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC \u05E1\u05D9\u05D8\u05D9 \u05E0\u05D2\u05DE\u05E8\u05D5 \u05E2\u05DD \u05DE\u05E2\u05DC 2.5. \u05D0\u05E8\u05E1\u05E0\u05DC \u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05D4\u05D2\u05E0\u05D4 \u05D7\u05D6\u05E7\u05D4 \u05D1\u05D7\u05D5\u05E5.",
    result: "pending",
    category: "football",
  },
  {
    id: 2,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05DC\u05D4 \u05DC\u05D9\u05D2\u05D4",
    leagueFlag: "\uD83C\uDDEA\uD83C\uDDF8",
    homeTeam: "\u05E8\u05D9\u05D0\u05DC \u05DE\u05D3\u05E8\u05D9\u05D3",
    awayTeam: "\u05D1\u05E8\u05E6\u05DC\u05D5\u05E0\u05D4",
    time: "22:00",
    recommendation: "1X \u05DB\u05E4\u05D5\u05DC",
    odds: "1.50",
    confidence: 88,
    analysis:
      "\u05E8\u05D9\u05D0\u05DC \u05DC\u05D0 \u05D4\u05E4\u05E1\u05D9\u05D3\u05D4 \u05D1\u05D1\u05D9\u05EA 12 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD. \u05D1\u05E8\u05E6\u05DC\u05D5\u05E0\u05D4 \u05E1\u05D5\u05D1\u05DC\u05EA \u05DE\u05E4\u05E6\u05D9\u05E2\u05D5\u05EA. \u05D4\u05DE\u05E7\u05D3\u05DD \u05DE\u05E6\u05D5\u05D9\u05DF \u05DC\u05DE\u05D0\u05D3.",
    result: "pending",
    category: "football",
  },
  {
    id: 3,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05DC\u05D9\u05D2\u05EA \u05D4\u05D0\u05DC\u05D5\u05E4\u05D5\u05EA",
    leagueFlag: "\uD83C\uDFC6",
    homeTeam: "PSG",
    awayTeam: "\u05D1\u05D0\u05D9\u05D9\u05E8\u05DF \u05DE\u05D9\u05E0\u05DB\u05DF",
    time: "22:00",
    recommendation: "GG (\u05E9\u05EA\u05D9 \u05D4\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05DE\u05D1\u05E7\u05D9\u05E2\u05D5\u05EA)",
    odds: "1.70",
    confidence: 76,
    analysis:
      "\u05DE\u05E9\u05D7\u05E7 \u05E4\u05DC\u05D9\u05D9\u05D0\u05D5\u05E3 \u05D1\u05DC\u05D9\u05D2\u05EA \u05D4\u05D0\u05DC\u05D5\u05E4\u05D5\u05EA. \u05E9\u05EA\u05D9 \u05D4\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05DC\u05E0\u05E6\u05D7 \u05D5\u05D9\u05E9\u05D7\u05E7\u05D5 \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8 \u05D4\u05EA\u05E7\u05E4\u05D9.",
    result: "win",
    category: "football",
  },
  {
    id: 4,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05E1\u05E8\u05D9\u05D9\u05D4 A",
    leagueFlag: "\uD83C\uDDEE\uD83C\uDDF9",
    homeTeam: "\u05D0\u05D9\u05E0\u05D8\u05E8",
    awayTeam: "\u05D9\u05D5\u05D1\u05E0\u05D8\u05D5\u05E1",
    time: "21:45",
    recommendation: "\u05D0\u05D9\u05E0\u05D8\u05E8 \u05DC\u05E0\u05E6\u05D7",
    odds: "1.95",
    confidence: 71,
    analysis:
      "\u05D0\u05D9\u05E0\u05D8\u05E8 \u05D7\u05D6\u05E7\u05D4 \u05DE\u05D0\u05D5\u05D3 \u05D1\u05D1\u05D9\u05EA. \u05D9\u05D5\u05D1\u05E0\u05D8\u05D5\u05E1 \u05DC\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD. \u05DE\u05E7\u05D3\u05DD \u05D8\u05D5\u05D1 \u05DC\u05DE\u05D0\u05E8\u05D7\u05D9\u05DD.",
    result: "win",
    category: "football",
  },
  {
    id: 5,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05D1\u05D5\u05E0\u05D3\u05E1\u05DC\u05D9\u05D2\u05D4",
    leagueFlag: "\uD83C\uDDE9\uD83C\uDDEA",
    homeTeam: "\u05D1\u05D0\u05D9\u05D9\u05E8\u05DF",
    awayTeam: "\u05D3\u05D5\u05E8\u05D8\u05DE\u05D5\u05E0\u05D3",
    time: "20:30",
    recommendation: "\u05DE\u05E2\u05DC 2.5 + GG",
    odds: "2.10",
    confidence: 74,
    analysis:
      "\u05D3\u05E8\u05D1\u05D9 \u05E7\u05DC\u05D0\u05E1\u05D9\u05E7\u05E8. 6 \u05DE\u05EA\u05D5\u05DA 6 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD \u05E0\u05D2\u05DE\u05E8\u05D5 \u05E2\u05DD \u05DE\u05E2\u05DC 2.5 \u05E9\u05E2\u05E8\u05D9\u05DD. \u05DE\u05E9\u05D7\u05E7 \u05E4\u05EA\u05D5\u05D7.",
    result: "pending",
    category: "football",
  },
  {
    id: 6,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05DC\u05D9\u05D2\u05EA \u05D4\u05E2\u05DC",
    leagueFlag: "\uD83C\uDDEE\uD83C\uDDF1",
    homeTeam: "\u05DE\u05DB\u05D1\u05D9 \u05EA\u05DC \u05D0\u05D1\u05D9\u05D1",
    awayTeam: "\u05D4\u05E4\u05D5\u05E2\u05DC \u05D1\u05D0\u05E8 \u05E9\u05D1\u05E2",
    time: "20:15",
    recommendation: "\u05DE\u05DB\u05D1\u05D9 \u05DC\u05E0\u05E6\u05D7",
    odds: "1.60",
    confidence: 80,
    analysis:
      "\u05DE\u05DB\u05D1\u05D9 \u05D1\u05E4\u05D5\u05E8\u05DD \u05DE\u05E6\u05D5\u05D9\u05DF \u05D4\u05E2\u05D5\u05E0\u05D4. 3 \u05E0\u05D9\u05E6\u05D7\u05D5\u05E0\u05D5\u05EA \u05E8\u05E6\u05D5\u05E4\u05D9\u05DD. \u05D4\u05E4\u05D5\u05E2\u05DC \u05D1\u05DE\u05E9\u05D1\u05E8 \u05D1\u05D7\u05E6\u05D9 \u05D4\u05D8\u05D1\u05DC\u05D4.",
    result: "pending",
    category: "football",
  },
  {
    id: 7,
    sport: "basketball",
    sportEmoji: "\uD83C\uDFC0",
    league: "NBA",
    leagueFlag: "\uD83C\uDDFA\uD83C\uDDF8",
    homeTeam: "\u05DC\u05D9\u05D9\u05E7\u05E8\u05E1",
    awayTeam: "\u05E1\u05DC\u05D8\u05D9\u05E7\u05E1",
    time: "03:00",
    recommendation: "\u05DC\u05D9\u05D9\u05E7\u05E8\u05E1 +4.5",
    odds: "1.90",
    confidence: 79,
    analysis:
      "\u05DC\u05D9\u05D9\u05E7\u05E8\u05E1 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D5\u05DC\u05D1\u05E8\u05D5\u05DF \u05D1\u05E4\u05D5\u05E8\u05DD \u05DE\u05E6\u05D5\u05D9\u05DF. \u05E1\u05DC\u05D8\u05D9\u05E7\u05E1 \u05DC\u05DC\u05D0 \u05D8\u05D9\u05D9\u05D8\u05D5\u05DD \u05D1\u05E4\u05E6\u05D9\u05E2\u05D4.",
    result: "pending",
    category: "basketball",
  },
  {
    id: 8,
    sport: "basketball",
    sportEmoji: "\uD83C\uDFC0",
    league: "NBA",
    leagueFlag: "\uD83C\uDDFA\uD83C\uDDF8",
    homeTeam: "\u05D5\u05D5\u05E8\u05D9\u05D5\u05E8\u05E1",
    awayTeam: "\u05E0\u05D0\u05D2\u05D8\u05E1",
    time: "04:30",
    recommendation: "\u05DE\u05E2\u05DC 225.5 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA",
    odds: "1.85",
    confidence: 75,
    analysis:
      "\u05E9\u05EA\u05D9 \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D4\u05EA\u05E7\u05E4\u05D9\u05D5\u05EA \u05E2\u05DD \u05DE\u05DE\u05D5\u05E6\u05E2\u05D9\u05DD \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD. \u05DE\u05DE\u05D5\u05E6\u05E2 \u05DE\u05E9\u05D7\u05E7 \u05E4\u05EA\u05D5\u05D7 \u05E2\u05DD \u05D4\u05E8\u05D1\u05D4 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA.",
    result: "pending",
    category: "basketball",
  },
  {
    id: 9,
    sport: "basketball",
    sportEmoji: "\uD83C\uDFC0",
    league: "\u05D9\u05D5\u05E8\u05D5\u05DC\u05D9\u05D2",
    leagueFlag: "\uD83C\uDDEA\uD83C\uDDFA",
    homeTeam: "\u05DE\u05DB\u05D1\u05D9 \u05EA\"\u05D0",
    awayTeam: "\u05D0\u05D5\u05DC\u05D9\u05DE\u05E4\u05D9\u05D0\u05E7\u05D5\u05E1",
    time: "21:00",
    recommendation: "\u05DE\u05DB\u05D1\u05D9 +3.5",
    odds: "1.80",
    confidence: 73,
    analysis:
      "\u05DE\u05DB\u05D1\u05D9 \u05DE\u05E9\u05D7\u05E7\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA \u05D1\u05D9\u05D5\u05E8\u05D5\u05DC\u05D9\u05D2 \u05D5\u05D9\u05E9 \u05DC\u05D4\u05DD \u05DE\u05D5\u05D8\u05D9\u05D1\u05E6\u05D9\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4. \u05DE\u05E9\u05D7\u05E7 \u05E6\u05DE\u05D5\u05D3.",
    result: "win",
    category: "basketball",
  },
  {
    id: 10,
    sport: "tennis",
    sportEmoji: "\uD83C\uDFBE",
    league: "ATP Masters",
    leagueFlag: "\uD83C\uDFBE",
    homeTeam: "\u05D2'\u05D5\u05E7\u05D5\u05D1\u05D9\u05E5'",
    awayTeam: "\u05E1\u05D9\u05E0\u05E8",
    time: "19:00",
    recommendation: "\u05D2'\u05D5\u05E7\u05D5\u05D1\u05D9\u05E5' 2-0 \u05E1\u05D8\u05D9\u05DD",
    odds: "1.75",
    confidence: 83,
    analysis:
      "\u05D2'\u05D5\u05E7\u05D5\u05D1\u05D9\u05E5' \u05D1\u05E4\u05D5\u05E8\u05DD \u05DE\u05D3\u05D4\u05D9\u05DD \u05D4\u05E2\u05D5\u05E0\u05D4. \u05E1\u05D9\u05E0\u05E8 \u05E2\u05D5\u05D3 \u05D7\u05D5\u05D6\u05E8 \u05DE\u05E4\u05E6\u05D9\u05E2\u05D4. \u05D9\u05EA\u05E8\u05D5\u05DF \u05D2\u05D3\u05D5\u05DC \u05D1\u05D9\u05DF \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05DD.",
    result: "pending",
    category: "tennis",
  },
  {
    id: 11,
    sport: "tennis",
    sportEmoji: "\uD83C\uDFBE",
    league: "WTA 1000",
    leagueFlag: "\uD83C\uDFBE",
    homeTeam: "\u05E1\u05D1\u05DC\u05E0\u05E7\u05D4",
    awayTeam: "\u05E8\u05D9\u05D1\u05E7\u05D9\u05E0\u05D4",
    time: "17:30",
    recommendation: "\u05DE\u05E2\u05DC 21.5 \u05D2\u05D9\u05D9\u05DE\u05E1",
    odds: "1.80",
    confidence: 70,
    analysis:
      "\u05E9\u05EA\u05D9 \u05D4\u05E9\u05D7\u05E7\u05E0\u05D9\u05D5\u05EA \u05D0\u05D2\u05E8\u05E1\u05D9\u05D1\u05D9\u05D5\u05EA \u05E2\u05DD \u05E1\u05E8\u05D1 \u05D7\u05D6\u05E7. \u05E6\u05E4\u05D5\u05D9 \u05DE\u05E9\u05D7\u05E7 \u05D0\u05E8\u05D5\u05DA \u05E2\u05DD \u05D4\u05E8\u05D1\u05D4 \u05D2\u05D9\u05D9\u05DE\u05E1.",
    result: "pending",
    category: "tennis",
  },
  {
    id: 12,
    sport: "hockey",
    sportEmoji: "\uD83C\uDFD2",
    league: "NHL",
    leagueFlag: "\uD83C\uDDFA\uD83C\uDDF8",
    homeTeam: "\u05E8\u05D9\u05D9\u05E0\u05D2'\u05E8\u05E1",
    awayTeam: "\u05E4\u05E0\u05D2\u05D5\u05D5\u05D9\u05E0\u05E1",
    time: "02:00",
    recommendation: "\u05DE\u05E2\u05DC 5.5 \u05E9\u05E2\u05E8\u05D9\u05DD",
    odds: "1.90",
    confidence: 72,
    analysis:
      "\u05E9\u05EA\u05D9 \u05D4\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D4\u05EA\u05E7\u05E4\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05D2\u05E0\u05D4 \u05D7\u05DC\u05E9\u05D4. \u05DE\u05DE\u05D5\u05E6\u05E2 \u05DE\u05E9\u05D7\u05E7 \u05E2\u05DD \u05D4\u05E8\u05D1\u05D4 \u05E9\u05E2\u05E8\u05D9\u05DD.",
    result: "pending",
    category: "hockey",
  },
  {
    id: 13,
    sport: "mma",
    sportEmoji: "\uD83E\uDD4A",
    league: "UFC 310",
    leagueFlag: "\uD83E\uDD4A",
    homeTeam: "\u05D0\u05D5\u05DC\u05D9\u05D5\u05D9\u05D9\u05E8\u05D4",
    awayTeam: "\u05DE\u05E7\u05D2\u05E8\u05D2\u05D5\u05E8",
    time: "04:00",
    recommendation: "\u05D0\u05D5\u05DC\u05D9\u05D5\u05D9\u05D9\u05E8\u05D4 \u05DC\u05E0\u05E6\u05D7",
    odds: "1.65",
    confidence: 77,
    analysis:
      "\u05D0\u05D5\u05DC\u05D9\u05D5\u05D9\u05D9\u05E8\u05D4 \u05D1\u05E4\u05D5\u05E8\u05DD \u05DE\u05E6\u05D5\u05D9\u05DF \u05D5\u05E2\u05DD \u05D9\u05EA\u05E8\u05D5\u05DF \u05D1\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF. \u05DE\u05E7\u05D2\u05E8\u05D2\u05D5\u05E8 \u05D7\u05D5\u05D6\u05E8 \u05DE\u05E4\u05E6\u05D9\u05E2\u05D4.",
    result: "pending",
    category: "mma",
  },
  {
    id: 14,
    sport: "baseball",
    sportEmoji: "\u26BE",
    league: "MLB",
    leagueFlag: "\uD83C\uDDFA\uD83C\uDDF8",
    homeTeam: "\u05D9\u05E0\u05E7\u05D9\u05D6",
    awayTeam: "\u05E8\u05D3 \u05E1\u05D5\u05E7\u05E1",
    time: "01:00",
    recommendation: "\u05D9\u05E0\u05E7\u05D9\u05D6 -1.5 \u05E8\u05D0\u05E0\u05E1",
    odds: "2.00",
    confidence: 68,
    analysis:
      "\u05D9\u05E0\u05E7\u05D9\u05D6 \u05E2\u05DD \u05E4\u05D9\u05E6'\u05E8 \u05DE\u05E6\u05D5\u05D9\u05DF \u05D1\u05D4\u05EA\u05D7\u05DC\u05D4. \u05E8\u05D3 \u05E1\u05D5\u05E7\u05E1 \u05D1\u05E8\u05E6\u05E3 \u05D4\u05E4\u05E1\u05D3\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05DF.",
    result: "pending",
    category: "baseball",
  },
  {
    id: 15,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05DC\u05D9\u05D2 1",
    leagueFlag: "\uD83C\uDDEB\uD83C\uDDF7",
    homeTeam: "\u05DC\u05D9\u05D5\u05DF",
    awayTeam: "\u05DE\u05D5\u05E0\u05E7\u05D5",
    time: "21:00",
    recommendation: "\u05DC\u05D9\u05D5\u05DF \u05DC\u05E0\u05E6\u05D7",
    odds: "1.75",
    confidence: 78,
    analysis:
      "\u05DC\u05D9\u05D5\u05DF \u05D1\u05D1\u05D9\u05EA \u05E2\u05DD 5 \u05E0\u05D9\u05E6\u05D7\u05D5\u05E0\u05D5\u05EA \u05E8\u05E6\u05D5\u05E4\u05D9\u05DD. \u05DE\u05D5\u05E0\u05E7\u05D5 \u05D1\u05DE\u05E9\u05D1\u05E8 \u05D1\u05D7\u05E6\u05D9 \u05D4\u05D8\u05D1\u05DC\u05D4. \u05D4\u05DE\u05E7\u05D3\u05DD \u05D0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9.",
    result: "pending",
    category: "football",
  },
  {
    id: 16,
    sport: "football",
    sportEmoji: "\u26BD",
    league: "\u05E4\u05E8\u05DE\u05D9\u05D9\u05E8 \u05DC\u05D9\u05D2",
    leagueFlag: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F",
    homeTeam: "\u05DC\u05D9\u05D1\u05E8\u05E4\u05D5\u05DC",
    awayTeam: "\u05E6'\u05DC\u05E1\u05D9",
    time: "17:00",
    recommendation: "\u05DC\u05D9\u05D1\u05E8\u05E4\u05D5\u05DC \u05DC\u05E0\u05E6\u05D7 + \u05DE\u05E2\u05DC 1.5",
    odds: "1.55",
    confidence: 85,
    analysis:
      "\u05DC\u05D9\u05D1\u05E8\u05E4\u05D5\u05DC \u05D1\u05E4\u05D5\u05E8\u05DD \u05D0\u05D3\u05D9\u05E8. 8 \u05E0\u05D9\u05E6\u05D7\u05D5\u05E0\u05D5\u05EA \u05E8\u05E6\u05D5\u05E4\u05D9\u05DD \u05D1\u05D1\u05D9\u05EA. \u05E6'\u05DC\u05E1\u05D9 \u05DC\u05D0 \u05D1\u05E4\u05D5\u05E8\u05DD \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1.",
    result: "win",
    category: "football",
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTips = useMemo(() => {
    if (activeFilter === "all") return tips;
    return tips.filter((tip) => tip.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen">
      <Header activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <HeroSection />

      {/* Tips Section */}
      <section id="tips" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">
              <span className="shimmer-text">
                \uD83D\uDD25 \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05D4\u05D9\u05D5\u05DD
              </span>
            </h3>
            <div className="text-sm text-[var(--color-text-secondary)]">
              {filteredTips.length} \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTips.map((tip, index) => (
              <div
                key={tip.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TipCard tip={tip} />
              </div>
            ))}
          </div>

          {filteredTips.length === 0 && (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">\uD83D\uDD0D</div>
              <p className="text-[var(--color-text-secondary)]">
                \u05D0\u05D9\u05DF \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05DC\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D6\u05D5. \u05E0\u05E1\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D0\u05D7\u05E8\u05EA.
              </p>
            </div>
          )}
        </div>
      </section>

      <StatsSection />
      <LeaguesSection />
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
}
