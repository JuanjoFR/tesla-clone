function Footer() {
  return (
    <footer className="py-6 px-10 text-xs text-gray-200">
      <ol className="flex">
        <li>
          <a className="cursor-pointer p-2">{`Tesla © ${new Date().getFullYear()}`}</a>
        </li>
        <li>
          <a className="cursor-pointer p-2">Privacy & Legal</a>
        </li>
        <li>
          <a className="cursor-pointer p-2 hidden sm:inline">Contact</a>
        </li>
        <li>
          <a className="cursor-pointer p-2 hidden sm:inline">Careers</a>
        </li>
        <li>
          <a className="cursor-pointer p-2 hidden sm:inline">News</a>
        </li>
        <li>
          <a className="cursor-pointer p-2 hidden sm:inline">Locations</a>
        </li>
      </ol>
    </footer>
  )
}

export default Footer
