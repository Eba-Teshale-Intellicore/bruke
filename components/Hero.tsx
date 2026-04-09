"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { programs } from "@/lib/constants";
import { Gift, Star } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

interface FloatingEmojiProps {
  emoji: string;
  delay: number;
  key?: any;
}

const FloatingEmoji = ({ emoji, delay }: FloatingEmojiProps) => (
  <motion.div
    initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0, rotate: 0 }}
    animate={{ 
      y: "-10vh", 
      opacity: [0, 1, 1, 0],
      rotate: 360,
      x: (Math.random() * 100 - 50) + "vw"
    }}
    transition={{ 
      duration: 10 + Math.random() * 5, 
      delay, 
      repeat: Infinity,
      ease: "linear" 
    }}
    className="fixed text-4xl pointer-events-none z-0"
  >
    {emoji}
  </motion.div>
);

const jesusQuiz = [
  {
    question: "Who baptized Jesus?",
    options: ["John the Baptist", "Peter", "Paul", "Moses"],
    answer: "John the Baptist",
  },
  {
    question: "Where was Jesus born?",
    options: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"],
    answer: "Bethlehem",
  },
  {
    question: "What miracle did Jesus perform at the wedding?",
    options: ["Walked on water", "Turned water into wine", "Fed 5000", "Healed a blind man"],
    answer: "Turned water into wine",
  },
  {
    question: "Who betrayed Jesus?",
    options: ["Peter", "Judas Iscariot", "Thomas", "John"],
    answer: "Judas Iscariot",
  },
  {
    question: "How many days was Jesus in the desert?",
    options: ["30", "40", "50", "20"],
    answer: "40",
  },
];

const birthdayNatureQuiz = [
  {
    question: "Which animal represents courage and strength?",
    options: ["Lion", "Rabbit", "Deer", "Owl"],
    answer: "Lion",
  },
  {
    question: "Which bird symbolizes vision and soaring high in life?",
    options: ["Eagle", "Sparrow", "Peacock", "Falcon"],
    answer: "Eagle",
  },
  {
    question: "Which creature reminds us of transformation and new beginnings?",
    options: ["Butterfly", "Cat", "Wolf", "Dolphin"],
    answer: "Butterfly",
  },
  {
    question: "Which animal shows loyalty and love, like the blessings of God?",
    options: ["Dog", "Horse", "Elephant", "Swan"],
    answer: "Dog",
  },
];

export default function Hero() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [emojis, setEmojis] = useState<{ id: number; emoji: string; delay: number }[]>([]);
  const [current, setCurrent] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<'jesus' | 'nature'>('jesus');
  const [cardCode, setCardCode] = useState("");

  useEffect(() => {
    const birthdayEmojis = ["🎂", "🎈", "🎉", "✨", "🎁", "🥳"];
    const newEmojis = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      emoji: birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)],
      delay: Math.random() * 10
    }));
    setEmojis(newEmojis);
  }, []);

  const currentQuiz = activeQuiz === 'jesus' ? jesusQuiz : birthdayNatureQuiz;

  const handleAnswer = (option: string) => {
    if (option === currentQuiz[current].answer) {
      if (current === currentQuiz.length - 1) {
        // Quiz finished
        if (activeQuiz === 'jesus') {
          setCardCode("00000000000000");
          // 81409560629723
        } else {
          setCardCode("00000000000000");
          // 81039720895820
        }
        setShowCard(true);
        setShowQuiz(false);
      } else {
        setCurrent(current + 1);
      }
    } else {
      console.log("Oops! Try again 🙏");
    }
  };

  const handleNextPhase = () => {
    if (activeQuiz === 'jesus') {
      setActiveQuiz('nature');
      setCurrent(0);
      setShowQuiz(true);
      setShowCard(false);
    } else {
      setShowCard(false);
    }
  };

  return (
    <section
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
      id="hero"
    >                         
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
            
      {/* Floating Emojis */}
      {emojis.map((e) => (
        <FloatingEmoji key={e.id} emoji={e.emoji} delay={e.delay} />
      ))}

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 px-6 py-20">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-300 w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-md"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium uppercase tracking-wider">It's a special day!</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Happy Birthday, <br />
            <ThemeToggle />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 animate-gradient">
              Bruke!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            "May God bless you today and always, filling your path with His infinite light!"
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button 
              size="lg"
              onClick={() => {
                setActiveQuiz('jesus');
                setCurrent(0);
                setShowQuiz(true);
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95 group"
            >
              <Gift className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Open Surprise 🎁
            </Button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <div className="flex items-center justify-center">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group w-full max-w-md"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Card className="overflow-hidden border-4 border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl rounded-[2rem] aspect-[3/4] relative">
                <img
                  src={program.image}
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-white font-bold text-2xl mb-2">{program.title}</h3>
                    <p className="text-gray-300 text-base">{program.description}</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-slate-900 p-8 rounded-3xl max-w-md w-full shadow-2xl text-center border border-white/10"
            >
              <div className="mb-4 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                {activeQuiz === 'jesus' ? 'Phase 1: Biblical Wisdom' : 'Phase 2: Nature & Creation'}
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {currentQuiz[current].question}
              </h2>
              <div className="grid gap-4">
                {currentQuiz[current].options.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 transition-colors"
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <p className="mt-6 text-gray-400 text-sm">Question {current + 1} of {currentQuiz.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Card Popup */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="max-w-sm w-full"
            >
              <Card className="bg-white p-8 rounded-3xl text-center shadow-2xl">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">
                  {activeQuiz === 'jesus' ? 'Great Job! 🎉' : 'Final Victory! 🏆'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {activeQuiz === 'jesus' 
                    ? 'You mastered the first challenge! Here is your first code:' 
                    : 'You have completed all challenges! Here is your final Ethio card code:'}
                </p>
                <div className="p-6 bg-yellow-400 rounded-2xl font-mono text-2xl font-bold text-black tracking-wider shadow-inner">
                  {cardCode}
                </div>
                <Button
                  onClick={handleNextPhase}
                  className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700"
                >
                  {activeQuiz === 'jesus' ? 'Next: Nature Quiz 🌿' : 'Close'}
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
