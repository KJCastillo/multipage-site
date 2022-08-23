import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search
  //get query string from the path in the browswer

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ipsa, vel
        provident hic ullam quo dignissimos distinctio? Neque reprehenderit,
        odit dicta vel perferendis accusamus rem fuga suscipit dolore animi ad.
      </p>
    </div>
  );
}
