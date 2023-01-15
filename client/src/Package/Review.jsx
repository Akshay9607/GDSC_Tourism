import React from 'react'
import { TextareaAutosize } from '@mui/material'

const Review = () => {
  return (
    <>
        <TextareaAutosize
  aria-label="minimum height"
  minRows={3}
  placeholder="Minimum 3 rows"
  style={{ width: 200 }}
/>
    </>
  )
}

export default Review