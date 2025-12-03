"use client"

export default function Home() {

  return (
    <div className="home pt-4 relative">
      <div className="home-content flex flex-col gap-30">
        <div className="home-recent">
          <div className="home-recent-title">
            <h2 className="text-(--clr-text-light) text-[1.4rem] font-[500] md:text-[2rem]">
              Recently Visited
            </h2>
          </div>
          <div className="home-recent-list"></div>
        </div>
        <div className="home-favorites">
          <div className="home-favorites-title">
            <h2 className="text-(--clr-text-light) text-[1.4rem] font-[500] md:text-[2rem]">
              Favorite Folders
            </h2>
          </div>
          <div className="home-favorites-list"></div>
        </div>
      </div>
    </div>
  );
}
