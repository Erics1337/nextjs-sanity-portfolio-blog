import { useEffect } from "react"
import { useState } from "react"
import { Octokit } from "@octokit/core";
import moment from 'moment';



function Statistics() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

//   const [commits, setCommits] = useState([]);
//   const octokit = new Octokit({ auth: process.env.GITHUB_PAT });

  useEffect(() => {
    fetch("https://api.github.com/users/erics1337")
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [data])


//   useEffect(() => {
//     const owner = 'erics1337',
//                  repo = 'nextjs-sanity-portfolio-blog',
//            perPage = 5;

//     const fiveMostRecentCommits =  octokit.request(
//         `GET /repos/{owner}/{repo}/commits`, { owner, repo, per_page: perPage }
//     );

//     setCommits(fiveMostRecentCommits);
//   }, [])


  return (
    <section id="stats">
              {/* <ul>
        {commits.map(commit => (
          <li key={commit.id}>
            {commit.author.name}: {commit.message}
          </li>
        ))}
      </ul> */}


      <div
        className="bg-top bg-cover bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{ backgroundImage: "url(img/experience-figure.png)" }}
      >
        <div className="container">
          <div className="bg-white w-5/6 md:w-11/12 2xl:w-full mx-auto py-16 lg:py-20 xl:py-24 shadow">
            <h1 className="text-center font-semibold text-3xl pb-20 text-primary">My GitHub Stats</h1>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 xl:gap-5">
              <div className="flex md:flex-row flex-col justify-center items-center text-center md:text-left">
                <div>
                  <img
                    src="img/icon-project.svg"
                    className="mx-auto h-12 md:h-20 w-auto"
                    alt="icon project"
                  />
                </div>
                <div className="md:pl-5 md:pt-0 pt-5">
                  <h1 className="font-body font-bold md:text-4xl text-2xl text-primary">
                    {data?.public_repos}
                  </h1>
                  <h4 className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                    Public Repos
                  </h4>
                </div>
              </div>

              <div className="flex md:flex-row flex-col justify-center items-center text-center md:text-left">
                <div>
                  <img
                    src="img/icon-award.svg"
                    className="mx-auto h-12 md:h-20 w-auto"
                    alt="icon award"
                  />
                </div>
                <div className="md:pl-5 md:pt-0 pt-5">
                  <h1 className="font-body font-bold md:text-4xl text-2xl text-primary">
                    {data?.followers}
                  </h1>
                  <h4 className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                    Followers
                  </h4>
                </div>
              </div>

              <div className="flex md:flex-row flex-col justify-center items-center text-center md:text-left lg:mt-0 md:mt-10 mt-6">
                <div>
                  <img
                    src="img/icon-happy.svg"
                    className="mx-auto h-12 md:h-20 w-auto"
                    alt="icon happy clients"
                  />
                </div>
                <div className="md:pl-5 md:pt-0 pt-5">
                  <h1 className="font-body font-bold md:text-4xl text-2xl text-primary">
                    {data?.following}
                  </h1>
                  <h4 className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                    Accounts I follow
                  </h4>
                </div>
              </div>

              <div className="flex md:flex-row flex-col justify-center items-center text-center md:text-left lg:mt-0 md:mt-10 mt-6">
                <div>
                  <img
                    src="img/icon-puzzle.svg"
                    className="mx-auto h-12 md:h-20 w-auto"
                    alt="icon puzzle"
                  />
                </div>
                <div className="md:pl-5 md:pt-0 pt-5">
                  <h1 className="font-body font-bold md:text-4xl text-2xl text-primary">
                  {moment().diff(data?.created_at, 'years')}
                  </h1>
                  <h4 className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                    Years a Member
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
