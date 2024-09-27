import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'

export default function Profile() {

    const { user } = useContext(Usercontext)
    if (!user) return <div>please login</div>
    return <div>{user.username}</div>
}
