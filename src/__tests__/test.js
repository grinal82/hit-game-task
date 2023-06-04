import { JSDOM } from "jsdom";

describe("Game Logic", () => {
  let dead;
  let lost;
  let idArray;

  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <div id="dead">0</div>
          <div id="lost">0</div>
          <div id="hole1" class="hole hole_active">Hole 1</div>
          <div id="hole2" class="hole">Hole 2</div>
          <div id="hole3" class="hole">Hole 3</div>
        </body>
      </html>
    `);

    // eslint-disable-next-line no-undef
    global.document = dom.window.document;
    // eslint-disable-next-line no-undef
    global.window = dom.window;

    dead = document.getElementById("dead");
    lost = document.getElementById("lost");
    idArray = document.querySelectorAll(".hole");
  });

  it("should increment 'dead' count when clicking on an active hole", () => {
    const event = new window.Event("click");
    let activeHole = document.querySelector(".hole_active");
    dead.textContent = Number(dead.textContent) + 1;
    activeHole.dispatchEvent(event);
    expect(dead.textContent).toBe("1");
  });

  it("should reset 'dead' and 'lost' counts", () => {
    const event = new window.Event("click");
    for (let i = 0; i < 9; i++) {
      idArray[0].dispatchEvent(event);
    }
    expect(dead.textContent).toBe("0");
    expect(lost.textContent).toBe("0");
  });

  it("should increment 'lost' count when clicking on an inactive hole", () => {
    const event = new window.Event("click");

    for (let el of idArray) {
      el.dispatchEvent(event);
      if (!el.className.includes("hole_active")) {
        lost.textContent = Number(lost.textContent) + 1;
        break;
      }
    }
    expect(lost.textContent).toBe("1");
  });

  it("should reset 'dead' and 'lost' counts when 'lost' count reaches 4", () => {
    const event = new window.Event("click");
    for (let i = 0; i < 4; i++) {
      idArray[1].dispatchEvent(event);
    }
    expect(dead.textContent).toBe("0");
    expect(lost.textContent).toBe("0");
  });
});
