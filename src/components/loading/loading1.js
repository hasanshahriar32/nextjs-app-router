import "./loading.css";
const Loading1 = () => {
  return (
    <div>
      <main>
        <svg class="pl1" viewBox="0 0 128 128" width="128px" height="128px">
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
            <g class="pl1__g">
              <g transform="translate(20,20) rotate(0,44,44)">
                <g class="pl1__rect-g">
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                  />
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                    transform="translate(0,48)"
                  />
                </g>
                <g class="pl1__rect-g" transform="rotate(180,44,44)">
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                  />
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                    transform="translate(0,48)"
                  />
                </g>
              </g>
            </g>
          </g>
          <g fill="hsl(343,90%,50%)" mask="url(#pl-mask)">
            <g class="pl1__g">
              <g transform="translate(20,20) rotate(0,44,44)">
                <g class="pl1__rect-g">
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                  />
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                    transform="translate(0,48)"
                  />
                </g>
                <g class="pl1__rect-g" transform="rotate(180,44,44)">
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                  />
                  <rect
                    class="pl1__rect"
                    rx="8"
                    ry="8"
                    width="40"
                    height="40"
                    transform="translate(0,48)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </main>
    </div>
  );
};

export default Loading1;
