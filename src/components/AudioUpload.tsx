import { useState } from 'react';

export const AudioUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (selectedFile) {
      console.log("Selected File:", selectedFile);  // Log the file
      console.log("File Type:", selectedFile.type); // Log the file type

      // Check if file is either mp3 or wav
      if (selectedFile.type === 'audio/mp3' || selectedFile.type === 'audio/wav') {
        setFile(selectedFile);
        setError('');
        setSuccess('');
      } else {
        setError('Please upload an MP3 or WAV file.');
        setFile(null);
        setSuccess('');
      }
    }
  };


  const handleUpload = () => {
    if (file) {
      // Handle the upload logic here
      console.log('Uploading:', file);
      alert(`File ${file.name} uploaded successfully!`);
      setFile(null);
    }
  };

  const handleDelete = () => {
    setFile(null);
    setError('');
    setSuccess('');
  };

  return (
    <div className="flex flex-col items-center">
         {!file && (
            <label
                htmlFor="audio-upload"
                className="flex items-center px-4 py-2 bg-[#D92027] text-white rounded-lg cursor-pointer hover:bg-[#ca7c7d] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <div className='me-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                </svg>
                </div>
                Upload Audio
            </label>
       )}
      <input
        type="file"
        id="audio-upload"
        accept=".mp3,.wav"  // Allow both mp3 and wav files
        onChange={handleFileChange}
        className="hidden"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}
      {file && (
        <div>
            <div><p>Uploaded file:</p></div>
            <div className="flex">
                <p className="text-lg text-gray-500 mr-4 mb-1">{file.name}</p>
                <button
                    onClick={handleDelete}
                    className="flex items-center bg-white text-[#D92027] py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2593 5.73052L5.23988 5.7305C5.16248 5.73036 5.03714 5.73013 4.92437 5.74551C4.7786 5.76538 4.53632 5.82414 4.33152 6.03672C4.12673 6.24931 4.07704 6.49361 4.06262 6.64002C4.05146 6.75329 4.05636 6.87853 4.05938 6.95587L4.06013 6.97527L4.3529 14.8206C4.40887 16.3209 4.45377 17.5242 4.61099 18.4679C4.77358 19.4437 5.07236 20.256 5.71928 20.8976C6.3693 21.5423 7.17748 21.8231 8.14073 21.9545C9.06613 22.0808 10.2384 22.0808 11.6911 22.0808H12.3076C13.7607 22.0808 14.9333 22.0808 15.8589 21.9545C16.8223 21.8231 17.6306 21.5423 18.2807 20.8976C18.9276 20.256 19.2264 19.4437 19.389 18.4679C19.5462 17.5242 19.5911 16.3208 19.6471 14.8205L19.9399 6.97285L19.9406 6.95586C19.9436 6.87852 19.9485 6.75328 19.9373 6.64002C19.9229 6.4936 19.8732 6.2493 19.6684 6.03672C19.4636 5.82414 19.2214 5.76538 19.0756 5.74551C18.9628 5.73013 18.8375 5.73036 18.7601 5.7305L18.7407 5.73052H5.2593ZM10.0002 11.9355C10.442 11.9355 10.8002 12.2937 10.8002 12.7355V15.7355C10.8002 16.1774 10.442 16.5355 10.0002 16.5355C9.55837 16.5355 9.2002 16.1774 9.2002 15.7355V12.7355C9.2002 12.2937 9.55837 11.9355 10.0002 11.9355ZM14.8002 12.7355C14.8002 12.2937 14.442 11.9355 14.0002 11.9355C13.5584 11.9355 13.2002 12.2937 13.2002 12.7355V15.7355C13.2002 16.1774 13.5584 16.5355 14.0002 16.5355C14.442 16.5355 14.8002 16.1774 14.8002 15.7355V12.7355Z" fill="currentColor" className="my-path"></path>
                    <path d="M9.03261 2.97612C9.1314 2.84952 9.26394 2.70906 9.43887 2.57258C9.90572 2.20832 10.6137 1.91895 11.6469 1.91895C12.68 1.91894 13.388 2.20832 13.8549 2.57258C14.0186 2.7003 14.1451 2.8315 14.2417 2.95156C15.1195 2.97712 15.9969 3.01768 16.8737 3.07326C17.7953 3.13168 18.716 3.21224 20.5277 3.37077L20.5405 3.37189C20.9806 3.4104 21.3062 3.79843 21.2677 4.23858C21.2292 4.67872 20.8411 5.00431 20.401 4.9658C18.5736 4.8059 17.6727 4.72712 16.7725 4.67005C13.5941 4.46858 10.4062 4.46858 7.2278 4.67005C6.32753 4.72712 5.42661 4.8059 3.59927 4.9658C3.15913 5.00431 2.7711 4.67872 2.73259 4.23858C2.69407 3.79843 3.01966 3.4104 3.45981 3.37189L3.47257 3.37077C5.28431 3.21224 6.20499 3.13168 7.12658 3.07326C7.7616 3.033 8.39699 3.00063 9.03261 2.97612Z" fill="currentColor" className="my-path"></path>
                    </svg>
                    Delete
                </button>
            </div>
         </div>
      )}
    </div>
  );
};
