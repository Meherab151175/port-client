import pro1 from "../assets/New folder/p1.png";
import pro2 from "../assets/New folder/p2.png";

import "./Project.css";

const Project = () => {
  return (
    <div
      name="project"
      className="bg-[#0a192f] pt-10  md:h-screen text-gray-300"
    >
      <div className="w-full max-w-[1000px] mx-auto ">
        <div className="w-[400px] mx-auto text-center">
          <div className="py-4 text-center text-4xl font-bold inline border-b-4 border-pink-600 ">
            Project
          </div>
          <p className="pb-3 pt-6">Checkout my some recent project</p>
        </div>
        <div className="container project_container grid gap-[40px] md:grid-cols-3 grid-cols-1 ">
          <article className="project_item p-[20px] rounded-md border-2 border-transparent bg-slate-900 hover:bg-transparent hover:scale-105 shadow-xl shadow-slate-950 hover:border-slate-600 duration-300">
            <div className="project_item_image">
              <img className="rounded-xl overflow-hidden" src={pro1} alt="" />
            </div>
            <h3 className="my-[20px] font-bold text-lg">
              This is portfolio item name
            </h3>
            <ul className="ml-4">
              <li className="list-disc my-1 font-semibold">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="list-disc my-1 font-semibold">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="list-disc my-1 font-semibold">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              <a
                href=""
                className="border px-4 py-3 rounded-md my-3 btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href=""
                className="border px-4 py-3 rounded-md my-3 btn btn-primary"
                target="_blank"
              >
                LIve Demo
              </a>
            </div>
          </article>
          <article className="project_item p-[20px] rounded-md border-2 border-transparent bg-slate-900 hover:bg-transparent hover:scale-105 shadow-xl shadow-slate-950 hover:border-slate-600 duration-300">
            <div className="project_item_image">
              <img className="rounded-xl overflow-hidden" src={pro2} alt="" />
            </div>
            <h3 className="my-[20px] font-bold text-lg">
              This is portfolio item name
            </h3>
            <ul className="ml-4">
              <li className="list-disc my-1 font-semibold">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="list-disc my-1 font-semibold">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="list-disc my-1 font-semibold">
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              <a
                href=""
                className="border px-4 py-3 rounded-md my-3 btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href=""
                className="border px-4 py-3 rounded-md my-3 btn btn-primary"
                target="_blank"
              >
                LIve Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Project;
