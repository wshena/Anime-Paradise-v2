import { footerData } from "../utils/data"

const Footer = () => {
  return (
    <footer className="container container__padding grid grid-cols-2 md:grid md:grid-cols-3 lg:flex gap-[20px] lg:gap-0 items-center justify-between">
      {
        footerData.map((footer) => {
          return (
            <div className="flex-col gap-[10px]" key={footer.title}>
              <h1 className="mb-[10px] font-bold">{footer.title}</h1>
              <div className="flex flex-col gap-[8px]">
                {
                  footer.content.map((content) => {
                    return (
                      <a href="#" className="hover:underline" key={content}>{content}</a>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </footer>
  )
}

export default Footer