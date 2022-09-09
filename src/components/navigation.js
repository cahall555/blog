class Navigation extends HTMLElement {
    constructor() {
      super();
    }
  connectedCallback() {
    this.innerHTML = `

    <nav class="bg-blue border-light-grey px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
      
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-light md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-light md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-light md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    `;
  }
}

  customElements.define('navigation-component', Navigation);