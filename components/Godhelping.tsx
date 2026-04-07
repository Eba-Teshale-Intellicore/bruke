"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { images } from "@/lib/constants";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Music, Play, Heart, Sparkles, Video, Pause } from "lucide-react";

export default function GodHelping() {
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle audio playback
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play when revealed (optional, but browser might block it without user interaction)
  useEffect(() => {
    if (show && audioRef.current && !isPlaying) {
      // We try to play, but browsers often require a direct click
      // Since 'show' is triggered by a button click, this might work!
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Auto-play blocked, user must click play manually", err);
      });
    }
  }, [show]);

  return (
    <section className="py-24 px-6 border-solid border-5 border-foreground rounded-[25%] ">
       
      {/* Background Glow (using theme colors) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/ከልጅነቴ_ጀምሮ.mp3" loop />

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            A Special <span className="text-yellow-400">Blessing</span> for You
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            "Every good and perfect gift is from above, coming down from the Father of the heavenly lights."
          </p>
          
          {!show && (
            <Button
              onClick={() => setShow(true)}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-8 text-xl rounded-2xl shadow-xl shadow-yellow-400/20 transition-all hover:scale-105 group"
            >
              <Sparkles className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Reveal Blessings ✨
            </Button>
          )}
        </motion.div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="space-y-16 overflow-hidden"
            >
              {/* Image Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl aspect-[3/4]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Video and Audio Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* YouTube Video */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <Card className="overflow-hidden border-white/10 bg-black rounded-3xl shadow-2xl aspect-video relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/oOXvQz_gtfA?si=ca2k9dTNF_X-jzka"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </Card>
                  <div className="mt-4 flex items-center justify-center gap-2 text-red-400">
                    <Video className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-widest">Worship & Praise</span>
                  </div>
                </motion.div>

                {/* Audio / Message Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="space-y-6"
                >
                  <Card className="p-8 border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-yellow-400/20">
                      <Music className="w-16 h-16" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <button 
                        onClick={toggleAudio}
                        className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                      </button>
                      ከልጅነቴ_ጀምሮ
                    </h3>
                    
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
                        <Music className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Birthday Blessing Audio</p>
                        <p className="text-gray-400 text-xs">{isPlaying ? 'Playing peace and joy...' : 'Paused'}</p>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center gap-3"
                    >
                      You are blessed 🙏
                      {/* <Heart className="w-8 h-8 text-red-500 fill-current animate-bounce" /> */}
                    </motion.p>
                  </Card>

                  <div className="p-6 rounded-3xl bg-yellow-400/5 border border-yellow-400/10 text-yellow-400/80 text-sm italic">
                    "May the Lord bless you and keep you; the Lord make his face shine on you and be gracious to you."
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
