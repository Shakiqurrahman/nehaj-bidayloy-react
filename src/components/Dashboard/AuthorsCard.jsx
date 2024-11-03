import React from "react";

const AuthorsCard = ({ authorsData }) => {
    return (
        <div className="w-full flex items-center gap-4 p-8 bg-white max-w-[700px] rounded-2xl border">
            <img
                src="https://via.placeholder.com/150x150"
                alt="Author Image"
                className="object-cover size-28 rounded-full"
            />
            <div className="space-y-1">
                <h3 className="text-lg line-clamp-1 font-semibold text-primary">
                    Author Name
                </h3>
                <p className="text-sm text-gray-500 line-clamp-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore quasi quod quia harum ducimus, praesentium sunt nulla
                    atque veniam velit.
                </p>
                <p className="text-sm font-medium">Total Writings : 120</p>
            </div>
        </div>
    );
};

export default AuthorsCard;
