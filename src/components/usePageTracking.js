// src/hooks/usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_TRACKING_ID = "G-B9DTNHXB5N";
const FB_PIXEL_ID = "921470497122669";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    // ---- Google Analytics Page Tracking ----
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pagePath,
      });
    }

    // ---- Facebook Pixel Page Tracking ----
    if (window.fbq) {
      window.fbq("track", "PageView", {
        event_source_url: pagePath,
        pixel_id: FB_PIXEL_ID,
      });
    }

  }, [location]);
}

export default usePageTracking;