declare module 'glider-js' {
    export default class Glider {
      constructor(element: HTMLElement, options?: {
        slidesToShow?: number | 'auto';
        slidesToScroll?: number;
        itemWidth?: number;
        exactWidth?: boolean;
        scrollLock?: boolean;
        scrollLockDelay?: number;
        resizeLock?: boolean;
        duration?: number;
        easing?: (x: number, t: number, b: number, c: number, d: number) => number;
        rewind?: boolean;
        draggable?: boolean;
        dragVelocity?: number;
        dots?: string | HTMLElement;
        arrows?: {
          prev?: string | HTMLElement;
          next?: string | HTMLElement;
        };
        responsive?: {
          breakpoint: number;
          settings: Record<string, any>;
        }[];
        [key: string]: any;
      });
    }
  }
  