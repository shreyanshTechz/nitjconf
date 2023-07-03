import React from 'react'

export default function About(data) {
    function toggleText() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var button = document.getElementById("button");

        if (dots.classList.contains("hidden")) {
            // Show the dots
            dots.classList.remove("hidden");

            // Hide the more text
            moreText.classList.add("hidden");

            // change text of the button
            button.innerHTML = "Read more";
        } else {
            // Hide the dots
            dots.classList.add("hidden");

            // hide the more text
            moreText.classList.remove("hidden");

            // change text of the button
            button.innerHTML = "Read less";
        }
    }


  return (
    <div class="container">
        {/* <h1 class="mb-3 text-4xl font-light">Welcome to KindaCode.com</h1> */}

        {/* <!-- This text always show up --> */}
        <p>{data.about.slice(0,100)}

            {/* <!-- The three dots --> */}
            <span id="dots">...</span>

            {/* <!-- This content only be shown as needed --> */}
            <span id="more" class="hidden">{data.about.slice(100)}
                </span>
        </p>

        {/* <!-- Implement the read more/read less button --> */}
        <button onClick={toggleText} id="button"
            class="mt-3 px-5 py-2">Read
            more</button>
    </div>
  )
}
