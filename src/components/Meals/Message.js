import React from "react";

const Message = (props) => {
  const { alert, deleteAlert } = props;
  return (
    <>
      <div className="absolute bottom-4 ml-auto mr-auto left-0 right-0 w-36">
        <div>
          {alert && (
            <p className="text-green-500 bg-gray-200 rounded-md font-semibold text-xl px-3 py-2 text-center">
              Item added
            </p>
          )}
        </div>
        <div>
          {deleteAlert && (
            <h2 className="text-red-500 bg-gray-200 rounded-md font-semibold text-xl px-3 py-2 text-center">
              Item deleted
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Message;
