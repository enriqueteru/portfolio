import { Injectable, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

  animateDown(elementRef: ElementRef, cssClass?: string): void {
    const titles = cssClass
      ? elementRef.nativeElement.querySelectorAll(cssClass)
      : elementRef.nativeElement.querySelectorAll('.title-animate');

    gsap.from(titles, {
      scrollTrigger: {
        trigger: titles,
        toggleActions: 'restart pause pause pause',
      },
      duration: 1.5,
      opacity: 0,
      y: -150,
      stagger: 0.4,
      ease: 'power3.out',
    });
  }

  animateRigth(elementRef: ElementRef, cssClass?: string): void {
    const items = cssClass
      ? elementRef.nativeElement.querySelectorAll(cssClass)
      : elementRef.nativeElement.querySelectorAll('.title-animate');

    gsap.from(items, {
      scrollTrigger: {
        trigger: items,
      },
      duration: 1.5,
      opacity: 0,
      x: 150,
      stagger: 0.4,
      ease: 'power3.right',
    });
  }

  animateAppear(elementRef: ElementRef, cssClass: string = '.appear', duration: number = 1.2): void {
    const items = elementRef.nativeElement.querySelectorAll(cssClass);

    if (!items.length) {
      console.warn(`No elements found with class name '${cssClass}'`);
      return;
    }

    items.forEach((item: any, index: number) => {
      gsap.set(item, { opacity: 1 });
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          toggleActions: 'restart pause pause pause',
        },
        opacity: 0,
        y: -20,
        duration,
        stagger: 0.4,
        ease: 'linear',
      });
    });
  }

  animateTechs(elementRef: ElementRef, duration: number = 1.2): void {
    const scrollElements =
      elementRef.nativeElement.querySelectorAll('.solution__img');
    scrollElements.forEach((element: any, index: number) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          toggleActions: 'restart pause restart pause',
        },
        opacity: 0,
        y: index * 10,
        duration,
        ease: 'linear',
      });
    });
  }

  onMouseEnter(event: MouseEvent, gsapConfig?: any) {
    const element = event.target as HTMLElement;
    if (gsapConfig) {
      gsap.to(element, gsapConfig);
      return;
    }

    gsap.to(element, {
      duration: 0.5,
      scale: 1.1,
      ease: 'power2.out',
      filter: 'blur(0px)',
    });
  }

  onMouseLeave(event: MouseEvent, gsapConfig?: any) {
    const element = event.target as HTMLElement;
    if (gsapConfig) {
      gsap.to(element, gsapConfig);
      return;
    }

    gsap.to(element, {
      duration: 0.5,
      scale: 1,
      ease: 'power2.out',
      filter: 'blur(0px)',
    });
  }
}
