'use client'

import { useState } from "react";

export function ContactForm() {

  const [submitState, setSubmitState] = useState(true);

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
      setSubmitState(!submitState);
        e.preventDefault();
        const form = e.target as HTMLFormElement; // Explicitly cast to HTMLFormElement

        const formData = {
          access_key: "d7cd64e0-c816-4960-83b1-62fb3a1ed146",
          name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
          email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
          personsvernerklaering: (form.elements.namedItem("personsvernerklaering") as HTMLInputElement)?.value || "",
        };
      
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    function resetSubmitState() {
      setSubmitState(true);
    }

  return (
    <>
     {submitState ? <form className="w-full md:w-[600px]" onSubmit={handleSubmit}>
              <fieldset className="flex gap-4  flex-col border p-8 bg-white">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-sec">Navn:</label>
                  <input id="name" required name="name" type="text" className="border p-1 font-sec"></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email"  className="font-sec">E-post:</label>
                  <input id="email" required name="email" type="email" className="border p-1 font-sec"></input>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-sec">Melding:</label>
                  <textarea id="message" required name="message" maxLength={500} className="border p-1 font-sec h-24"></textarea>
                </div>
                <div className="flex flex-row gap-1">
                  <input id="personvernserklaering" name="personvernserklaering" type="checkbox" required className="border p-1 font-sec"></input>
                  <label htmlFor="personvernserklaering" className="font-sec text-sm">Jeg samtykker til at min informasjon blir lagret</label>
                </div>
                <div className="flex flex-col gap-1">
                  <input type="submit" className="h-11 px-6 bg-blue-main hover:bg-blue-hover font-sec text-white" value="Send inn forespørsel"></input>
                </div>
              </fieldset>
            </form>
            : <div className="flex flex-col max-w-[500px] gap-6 p-6 bg-white">
              <p className="text-center">Takk for din henvendelse!</p>
              <button onClick={resetSubmitState} className="bg-blue-main flex items-center gap-3 justify-center text-white px-6 w-full h-11 font-sec hover:bg-blue-hover">Send ny henvendelse</button>
            </div>}
    </>
  );
}