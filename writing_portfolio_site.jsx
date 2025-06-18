import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const articles = [
  {
    title: "The Psychology of Everyday Decisions",
    category: "Psychology",
    summary: "Explore the subtle science behind how we make choices, from what we eat to how we vote.",
  },
  {
    title: "How Cities Shape Human Behavior",
    category: "Sociology",
    summary: "An insight into the urban environments that influence our moods, actions, and identities.",
  },
  {
    title: "The Myth of Multitasking",
    category: "Productivity",
    summary: "A look at the brain's limits and why focusing on one task at a time is more effective.",
  },
  {
    title: "Rewilding the Future",
    category: "Environment",
    summary: "Can letting nature reclaim landscapes reverse the damage of industrialization?",
  },
  {
    title: "Designing for Digital Wellbeing",
    category: "Technology",
    summary: "Why tech design needs to prioritize human health and attention over engagement metrics.",
  },
  {
    title: "The Language of Influence",
    category: "Communication",
    summary: "How rhetoric, tone, and word choice subtly guide conversations and decisions.",
  },
  {
    title: "What Makes a Story Universal?",
    category: "Writing",
    summary: "A narrative deep dive into the shared structures behind timeless tales.",
  },
  {
    title: "The Science of Serendipity",
    category: "Science",
    summary: "Understanding the role of chance and observation in groundbreaking discoveries.",
  },
  {
    title: "Minimalism Beyond Aesthetics",
    category: "Lifestyle",
    summary: "Why simplifying your life is about more than just clean design and fewer things.",
  },
  {
    title: "Curiosity as a Creative Superpower",
    category: "Creativity",
    summary: "Nurturing the curious mind in a world of answers and algorithms.",
  },
  {
    title: "Digital Identity in the Age of AI",
    category: "Technology",
    summary: "Exploring how our online selves evolve with intelligent machines.",
  },
  {
    title: "The Quiet Power of Introverts",
    category: "Psychology",
    summary: "Reframing introversion as a strength, not a social flaw.",
  },
  {
    title: "How to Think in Systems",
    category: "Critical Thinking",
    summary: "A beginner’s guide to seeing the hidden patterns behind problems.",
  },
  {
    title: "Poetry in a Noisy World",
    category: "Writing",
    summary: "Why poetry still matters in an era of content overload.",
  },
  {
    title: "The Case for Boredom",
    category: "Mental Health",
    summary: "How idle moments are fertile ground for insight and creativity.",
  },
  {
    title: "Reclaiming Attention in the Attention Economy",
    category: "Society",
    summary: "Fighting distraction in a world designed to steal your focus.",
  },
  {
    title: "What Makes a Place Feel Like Home?",
    category: "Philosophy",
    summary: "Exploring belonging, memory, and architecture in the spaces we inhabit.",
  },
  {
    title: "The Ethics of Automation",
    category: "Technology",
    summary: "Who decides when machines replace human decisions—and what’s at stake?",
  },
  {
    title: "Writing as Thinking",
    category: "Writing",
    summary: "The discipline of shaping unclear ideas into clear narratives.",
  },
  {
    title: "Why We Love Maps",
    category: "Culture",
    summary: "A fascination with charts, symbols, and the desire to make the world legible.",
  },
];

export default function WritingPortfolio() {
  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">My Writing Portfolio</h1>
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {articles
                .filter((a) => cat === "All" || a.category === cat)
                .map((article, i) => (
                  <Card key={i} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                      <p className="text-gray-600">{article.summary}</p>
                      <p className="mt-2 text-sm text-right italic text-gray-400">{article.category}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
