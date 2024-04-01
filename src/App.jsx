import iconBlacklist from "/images/icon-blacklist.svg"
import iconfacebook from "/images/icon-facebook.svg"
import iconinstagram from "/images/icon-instagram.svg"
import iconpreview from "/images/icon-preview.svg"
import icontext from "/images/icon-text.svg"
import icontwitter from "/images/icon-twitter.svg"
import logo from "/images/logo.svg"
import logogoogle from "/images/logo-google.png"
import logohp from "/images/logo-hp.png"
import logoibm from "/images/logo-ibm.png"
import logomicrosoft from "/images/logo-microsoft.png"
import logovector from "/images/logo-vector-graphics.png"
import imagesComputer from "/images/image-computer.png"
import imagesdevices from "/images/image-devices.png"

export default function App() {
  const Supercharge = [
    { icon: iconBlacklist, name: "Create blacklists", content: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources." },
    { icon: icontext, name: "Plain text snippets", content: "Remove unwanted formatting from copied text for a consistent look." },
    { icon: iconpreview, name: "Sneak preview", content: "Quick preview of all snippets on your Clipboard for easy access." }
  ]

  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-4">
        {/* header */}
        <article className="sm:bg-bg-header-desktop bg-bg-header-mobile bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center my-10 p-4 gap-2 text-center">
            <img src={logo} alt="" className="w-12" />
            <h1>A history of everything you copy</h1>
            <p>Clipboard allows you to track and organize everything you
              copy. Instantly access your clipboard on all your devices.</p>
            <span className="flex flex-col sm:flex-row gap-4">
            <button className="px-4 py-2 rounded-full bg-StrongCyan hover:shadow-xl">Download for iOS</button>
              <button className="px-4 py-2 rounded-full bg-LightBlue hover:shadow-xl">Download for Mac</button>
            </span>
          </div>

        </article>
        {/* body */}
        <article className="flex flex-col gap-4 mt-4">
          {/* part 1 */}
          <div className="flex flex-col gap-4 text-center">
            <h1>Keep track of your snippets</h1>
            <p>Clipboard instantly stores any item you copy in the cloud,
              meaning you can access your snippets immediately on all your
              devices. Our Mac and iOS apps will help you organize everything.</p>
            <div className="flex flex-col sm:flex-row sm:justify-between justify-center p-4">
              <img src={imagesComputer} alt="" className="sm:w-1/3" />
              <div className="p-8 sm:mr-20">
                {[{ name: "Quick Search", content: "Easily search your snippets by content, category, web address, application, and more." },
                { name: "iCloud Sync", content: "Instantly saves and syncs snippets across all your devices." },
                { name: "Complete History", content: "Retrieve any snippets from the first moment you started using the app." }].map((infor, index) => (
                  <span key={index} className="flex flex-col sm:text-justify my-4">
                    <h2>{infor.name}</h2>
                    <p>{infor.content}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* part 2 */}
          <div className="flex flex-col gap-4 justify-center items-center mt-4 text-center">
            <h1>Access Clipboard anywhere</h1>
            <p>Whether you’re on the go, or at your computer, you can access all your Clipboard
              snippets in a few simple clicks.</p>
            <img src={imagesdevices} alt="" />
          </div>
          {/* part 3 */}
          <div className="flex flex-col gap-4 mt-4 text-center items-center">
            <h1>Supercharge your workflow</h1>
            <p>We’ve got the tools to boost your productivity.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 p-8">
              {Supercharge.map((infor, index) => (
                <span className="flex flex-col gap-2 items-center sm:mx-10">
                  <img src={infor.icon} alt="" />
                  <h2>{infor.name}</h2>
                  <p>{infor.content}</p>
                </span>
              ))}

            </div>
          </div>
          {/* part 4 */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-10 gap-10">
            {[logogoogle, logoibm, logomicrosoft, logohp, logovector].map((icon, index) => (
              <div key={index}>
                <img src={icon} alt="" />
              </div>
            ))}
          </div>
          {/* part 5 */}
          <div className="flex flex-col justify-center items-center text-center mt-8 gap-4">
            <h1>Clipboard for iOS and Mac OS</h1>
            <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
            <span className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto p-4">
              <button className="px-4 py-2 rounded-full bg-StrongCyan hover:shadow-xl">Download for iOS</button>
              <button className="px-4 py-2 rounded-full bg-LightBlue hover:shadow-xl">Download for Mac</button>
            </span>
          </div>
        </article>
        {/* footer */}
        <article className="flex flex-col sm:flex-row sm:justify-between items-center justify-center mt-10 sm:p-10 sm:ml-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <img src={logo} alt="" className="w-12" />
            <span className="flex flex-col sm:flex-row gap-8 sm:ml-10 text-center sm:text-start">
              {[
                ["FAQs", "Contact Us"],
                ["Privacy Policy", "Press Kit"],
                ["Install Guide"]
              ].map((links, index) => (
                <span key={index}>
                  {links.map((link, i) => (
                    <span key={i} className="flex flex-col sm:gap-8">
                      <a href="#">{link}</a>
                    </span>
                  ))}
                  
                </span>
              ))}
            </span>

          </div>

          <div className="flex flex-row gap-4 mt-10 sm:mt-0">
            {[iconfacebook, icontwitter, iconinstagram].map((icon, index) => (
              <span>
                <img src={icon} alt="" className="" />
              </span>
            ))}
          </div>

        </article>
      </section>
    </main>
  )
}