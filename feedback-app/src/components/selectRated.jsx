import React from 'react'

function SelectRated() {
  return (
    <div>
      <ul className='flex flex-wrap gap-3 cards'>
        <li>
          <label htmlFor="num1">1</label>
          <input type="radio" name="num1" id="1" value={1} />
        </li><li>
          <label htmlFor="num2">2</label>
          <input type="radio" name="num2" id="2" value={2} />
        </li>
        <li>
          <label htmlFor="num3">3</label>
          <input type="radio" name="num3" id="3" value={3} />
        </li>
        <li>
          <label htmlFor="num4">4</label>
          <input type="radio" name="num4" id="4" value={4} />
        </li>
        <li>
          <label htmlFor="num5">5</label>
          <input type="radio" name="num5" id="5" value={5} />
        </li>
        <li>
          <label htmlFor="num6">6</label>
          <input type="radio" name="num6" id="6" value={6} />
        </li>
        <li>
          <label htmlFor="num7">7</label>
          <input type="radio" name="num7" id="7" value={7} />
        </li>
        <li>
          <label htmlFor="num8">8</label>
          <input type="radio" name="num8" id="8" value={8} />
        </li>
        <li>
          <label htmlFor="num9">9</label>
          <input type="radio" name="num9" id="9" value={9} />
        </li>
        <li>
          <label htmlFor="num10">10</label>
          <input type="radio" name="num10" id="10" value={10} />
        </li>
      </ul>
    </div>
  )
}

export default SelectRated
