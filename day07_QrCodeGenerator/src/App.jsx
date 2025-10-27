import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [qr, setQr] = useState("");

  //submitHandler Function
  const qrGenerate = (e) => {
    e.preventDefault();
    if (data.trim() !== "") {
      setQr(`https://quickchart.io/qr?text=${encodeURIComponent(data)}`);
    } else {
      setQr("");
    }
    //Clear Inputfield when button is clicked
    setData("");
  };

  return (
    <div className="h-screen w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20220718/pngtree-abstract-background-with-dots-and-lines-connecting-generated-by-4k-rendering-technology-photo-image_25044558.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center">
      <div className="border border-white/40 bg-black/10 backdrop-blur-md p-10 rounded-lg flex flex-col items-center justify-center">
        <form onSubmit={qrGenerate} className="flex gap-2">
          <input
            className="outline-none border-2 border-blue-700 text-white py-2 px-6 rounded-lg font-semibold"
            type="text"
            placeholder="Enter text to show in QR"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button
            type="submit"
            disabled={!data.trim()}
            className="px-6 bg-blue-800 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all"
          >
            Generate QR
          </button>
        </form>

        {/* show Qr code */}
        {qr ? (
          <img src={qr} alt="QR Code" className="h-80 w-80 mt-10" />
        ) : (
          <p className="text-gray-200 tracking-wide pt-2">No text found</p>
        )}
      </div>
    </div>
  );
};

export default App;
