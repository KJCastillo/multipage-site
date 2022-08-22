import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    const { id } = useParams()
    //useParams calls the id stated in the Router in app.js

    const url = 'http://localhost:3000/articles/' + id
    const { data: article, isPending, error } = useFetch(url)
    //useFetch to search thru db for correct article

  return (
    <div>
       {isPending && <div>Loading...</div>}
       {error && <div>{error}</div>}
       {article && (
        <div>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <p>{article.body}</p>
        </div>
       )}
    </div>
  )
}