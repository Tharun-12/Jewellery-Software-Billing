import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FB_PIXEL_ID = "968629879626090";

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventName: string,
      parameters?: {
        event_source_url?: string;
        pixel_id?: string;
        [key: string]: unknown;
      }
    ) => void;
  }
}

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    // --------------------------------------------------
    // Facebook Pixel Page Tracking
    // --------------------------------------------------
    if (window.fbq) {
      window.fbq("track", "PageView", {
        event_source_url: window.location.href,
        pixel_id: FB_PIXEL_ID,
      });
    }
  }, [location.pathname, location.search]);

  return null;
}

export default usePageTracking;