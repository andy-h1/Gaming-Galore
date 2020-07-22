import React from 'react';

export const AddStreamer = () => (
    <div>
        <form>
            <input type="text" name="sname" placeholder="Streamer's name" required />
            <input type="submit" value="Add streamer" />
        </form>
    </div>
);