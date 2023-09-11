import Skeleton from "@mui/material/Skeleton";

export function Loader() {
  return (
    <section className="skeleton-content">
      <div className="container content">
        <div id="overlayer"></div>
        <div className="loader">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
