class InfoBox extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var title = this.title;
    var notes = this.attributes.notes.value;
    this.innerHTML = `

    <div
          class="bg-light-blue border-t-4 border-medium-blue rounded-b text-blue px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex-auto">
            <div class="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <p class="font-bold">${title}</p>
              <p class="text-sm">${notes}.</p>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define("infobox-component", InfoBox);
