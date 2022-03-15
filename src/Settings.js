import React from 'react'
import { Select} from 'react95';

const icons = [
  {label: "fruits", value:["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"]},
  {label: "fruits2", value:["🍌", "🍋", "🍍", "🥭", "🍈", "🍐"]},
  {label: "vegetables",value:["🥔","🥕","🌽","🥦","🍆","🍅"]},
  {label: "grains",value:["🍞","🥐","🥖","🥨","🥯","🧇"]},
  {label: "food",value:["🍔","🍕","🌭","🌮","🥪","🌯"]},
]

export const Settings = ({setCurrentIcons}) => {
  return (
    <>
    <span>
      <p>Icons</p>
      <Select
          defaultValue={1}
          options={icons}
          menuMaxHeight={160}
          width={160}
          onChange={e => setCurrentIcons(e.target.value)}
          onOpen={e => console.log('open', e)}
          onClose={e => console.log('close', e)}
          onBlur={e => console.log('blur', e)}
          onFocus={e => console.log('focus', e)}
          />
      </span>
    <span>
      <p>Theme</p>
      <Select
          />
    </span>
    </>
  )
}
