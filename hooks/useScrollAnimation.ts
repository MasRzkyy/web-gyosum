"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
}

export function useScrollAnimation(
    animation: gsap.TweenVars,
    options: ScrollAnimationOptions = {}
) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(elementRef.current, {
                ...animation,
                scrollTrigger: {
                    trigger: options.trigger || elementRef.current,
                    start: options.start || "top 80%",
                    end: options.end || "bottom 20%",
                    scrub: options.scrub || false,
                    markers: options.markers || false,
                },
            });
        });

        return () => ctx.revert();
    }, [animation, options]);

    return elementRef;
}

export function useFadeIn(delay: number = 0) {
    return useScrollAnimation({
        opacity: 0,
        y: 50,
        duration: 1,
        delay,
        ease: "power3.out",
    });
}

export function useSlideIn(direction: "left" | "right" | "up" | "down" = "up", delay: number = 0) {
    const directions = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
        up: { x: 0, y: 50 },
        down: { x: 0, y: -50 },
    };

    return useScrollAnimation({
        opacity: 0,
        ...directions[direction],
        duration: 1,
        delay,
        ease: "power3.out",
    });
}
