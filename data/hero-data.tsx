import React from "react";
import { Sparkles, Brain, Command } from "lucide-react";
import { Tab } from "../types/hero-types";

export const TabsData: Tab[] = [
  {
    value: "tab-1",
    icon: <Sparkles size={14} />,
    label: "Better Results",
    content: {
      badge: "AI Optimization",
      title: "Transform your AI interactions.",
      description:
        "Learn advanced prompt engineering techniques that help you get more accurate, relevant, and useful responses from AI models. Master the art of clear communication with AI.",
      buttonText: "Get Started Now",
      imageSrc: "/hero/one.jpg",
      imageAlt: "AI interaction visualization",
    },
  },
  {
    value: "tab-2",
    icon: <Brain size={14} />,
    label: "Smarter Prompts",
    content: {
      badge: "Expert Techniques",
      title: "Craft prompts that deliver.",
      description:
        "Discover proven frameworks for structuring your prompts, including step-by-step reasoning, few-shot learning, and chain-of-thought prompting. Get the outputs you need every time.",
      buttonText: "Get Started Now",
      imageSrc: "/hero/two.jpg",
      imageAlt: "Prompt structure diagram",
    },
  },
  {
    value: "tab-3",
    icon: <Command size={14} />,
    label: "Advanced Control",
    content: {
      badge: "Pro Strategies",
      title: "Master AI collaboration.",
      description:
        "Take control of your AI interactions with advanced techniques like role prompting, format specification, and temperature optimization. Turn AI into your most powerful tool.",
      buttonText: "Get Started Now",
      imageSrc: "/hero/three.jpg",
      imageAlt: "AI control interface",
    },
  },
];
