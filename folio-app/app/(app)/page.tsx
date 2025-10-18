import AddBookmarkButton from "@/components/AddBookmarkButton";

export default function Home() {
  return (
    <div className="home pt-4">
      <div className="home-content flex flex-col gap-30">
        <div className="home-top flex flex-row items-center justify-between">
          <h2 className="text-(--clr-text-light) text-[2rem] font-[500]">
            All Bookmarks
          </h2>
          <AddBookmarkButton />
        </div>
      </div>
    </div>
  );
}
