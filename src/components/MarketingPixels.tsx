import { useEffect } from "react";

type PixelConfig = {
  metaPixelId?: string;
  tiktokPixelId?: string;
  gtagId?: string; // GA4 measurement ID or Google Ads conversion ID
};

function getPixelConfig(): PixelConfig {
  const env = (import.meta as any).env ?? {};
  return {
    metaPixelId: env.VITE_META_PIXEL_ID as string | undefined,
    tiktokPixelId: env.VITE_TIKTOK_PIXEL_ID as string | undefined,
    gtagId: env.VITE_GTAG_ID as string | undefined,
  };
}

export function MarketingPixels() {
  useEffect(() => {
    const { metaPixelId, tiktokPixelId, gtagId } = getPixelConfig();

    if (metaPixelId) injectMetaPixel(metaPixelId);
    if (tiktokPixelId) injectTikTokPixel(tiktokPixelId);
    if (gtagId) injectGtag(gtagId);
  }, []);

  return null;
}

function injectScriptOnce(id: string, src?: string, innerHTML?: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  if (src) {
    s.async = true;
    s.src = src;
  }
  if (innerHTML) s.innerHTML = innerHTML;
  document.head.appendChild(s);
}

function injectMetaPixel(pixelId: string) {
  injectScriptOnce(
    `meta-pixel-${pixelId}`,
    undefined,
    `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');
`.trim()
  );

  // noscript is optional; keep it simple.
}

function injectTikTokPixel(pixelId: string) {
  injectScriptOnce(
    `tiktok-pixel-${pixelId}`,
    undefined,
    `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
  ttq.load=function(e,n){
    var i="https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i=ttq._i||{};
    ttq._i[e]=[];
    ttq._i[e]._u=i;
    ttq._t=ttq._t||{};
    ttq._t[e]=+new Date;
    ttq._o=ttq._o||{};
    ttq._o[e]=n||{};
    var o=d.createElement("script");
    o.type="text/javascript";
    o.async=!0;
    o.src=i+"?sdkid="+e+"&lib="+t;
    var a=d.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(o,a)
  };
  ttq.load('${pixelId}');
  ttq.page();
}(window, document, 'ttq');
`.trim()
  );
}

function injectGtag(gtagId: string) {
  injectScriptOnce(`gtag-lib-${gtagId}`, `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gtagId)}`);

  injectScriptOnce(
    `gtag-init-${gtagId}`,
    undefined,
    `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gtagId}');
`.trim()
  );
}