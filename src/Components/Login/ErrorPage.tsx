import { error } from "../../resources/images";

import { Image } from "react-bootstrap";
function ErrorPage() {
  return (
    <div className="d-flex flex-column error p-2 ">
      <Image src={error} alt="" />
      <h4 className="text-center">404, Page not founds</h4>
      <p className="text-center">
        Something went wrong. It’s look that your requested could not be found.
      </p>
      <p className="text-center">
        It’s look like the link is broken or the page is removed.
      </p>
    </div>
  );
}

export default ErrorPage;
