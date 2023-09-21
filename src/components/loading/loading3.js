import "./loading.css";

const Loading3 = () => {
  return (
    <div>
      <main>
        <svg class="pl3" viewBox="0 0 128 128" width="128px" height="128px">
          <defs>
            <linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#000" />
              <stop offset="100%" stop-color="#fff" />
            </linearGradient>
            <mask id="pl-mask">
              <rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
            </mask>
          </defs>
          <g fill="var(--primary)">
            <rect
              class="pl3__rect"
              rx="8"
              ry="8"
              width="64"
              height="64"
              transform="translate(64,0)"
            />
            <g class="pl3__rect-g" transform="scale(-1,-1)">
              <rect
                class="pl3__rect"
                rx="8"
                ry="8"
                width="64"
                height="64"
                transform="translate(64,0)"
              />
            </g>
          </g>
          <g fill="hsl(163,90%,50%)" mask="url(#pl-mask)">
            <rect
              class="pl3__rect"
              rx="8"
              ry="8"
              width="64"
              height="64"
              transform="translate(64,0)"
            />
            <g class="pl3__rect-g" transform="scale(-1,-1)">
              <rect
                class="pl3__rect"
                rx="8"
                ry="8"
                width="64"
                height="64"
                transform="translate(64,0)"
              />
            </g>
          </g>
        </svg>
      </main>
    </div>
  );
};

export default Loading3;
