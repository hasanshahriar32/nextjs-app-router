import "./loading.css";

const Loading3 = () => {
  return (
    <div>
      <main>
        <svg class="pl3" viewBox="0 0 128 128" width="128px" height="128px">
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
      ;
    </div>
  );
};

export default Loading3;
