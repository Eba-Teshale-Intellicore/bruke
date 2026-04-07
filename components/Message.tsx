"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

export default function Message() {
  const [msg, setMsg] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/messages")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setMsg(data[0]);
        } else {
          throw new Error("No message");
        }
      })
      .catch(() => {
        setMsg(
          "May this year be your most incredible one yet, filled with breakthroughs and beautiful moments."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Background Glow (using theme colors) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>

      <div className="container max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Card className="relative overflow-hidden bg-card/70 backdrop-blur-2xl border border-border p-10 md:p-16 rounded-[2rem] shadow-xl">
            
            {/* Top Quote */}
            <div className="absolute top-6 left-6 text-muted-foreground/20">
              <Quote className="w-20 h-20 rotate-180" />
            </div>

            <div className="relative z-10 text-center">
              
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
                className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6"
              >
                <Sparkles className="w-7 h-7" />
              </motion.div>

              {/* Message */}
              {loading ? (
                <p className="text-muted-foreground text-lg animate-pulse">
                  Loading beautiful message...
                </p>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-serif text-foreground mb-10 leading-relaxed italic"
                >
                  "{msg}"
                </motion.p>
              )}

              {/* Bible Verse */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  "For I know the plans I have for you, declares the Lord,
                  plans to prosper you and not to harm you, plans to give you
                  hope and a future."
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mb-3"></div>
                  <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.3em]">
                    Jeremiah 29:11
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Quote */}
            <div className="absolute bottom-6 right-6 text-muted-foreground/20">
              <Quote className="w-20 h-20" />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}