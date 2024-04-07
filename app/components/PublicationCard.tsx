import React from "react";
interface Publication {
    id: number;
    title: string;
    body: string;
    name: string;
}



export default function PublicationCard({ id, title, body, name }: Publication) {

    return (
      <div key={id} className="m-5 p-5 bg-slate-100 flex items-center flex-col rounded-xl shadow-2xl backdrop-blur-sm">
        <h3 className="text-black font-medium text-lg">Title: </h3>
        <h3 className="text-black justify-center">{title}</h3>
        <h3 className="text-black font-medium text-lg">Description: </h3>
        <p className="text-black justify-center">{body}</p>
        <h3 className="text-black font-medium text-lg">Author: </h3>
        <p className="text-black justify-center">{name}</p>
      </div>
    );
  }