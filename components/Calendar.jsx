import React, { useState, useEffect } from 'react';

export default function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Aufruf der Funktion zum Abrufen von Daten
        getData().then(data => {
            setEvents(data.items || []);
        }).catch(error => {
            console.error('Fehler beim Abrufen der Daten:', error);
        });
    }, []); // Leeres Abhängigkeitsarray, damit useEffect nur einmal nach dem ersten Rendern ausgeführt wird

    // Die getData-Funktion gibt das Ergebnis des Fetch-Requests zurück
    function getData() {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        // Rückgabe des Fetch-Results als Promise
        return fetch("https://v1.nocodeapi.com/lecram0ni/calendar/MJRAVVwOVoGQChey/listEvents", requestOptions)
            .then(response => response.json())
            .catch(error => {
                console.log('Fehler beim Fetch:', error);
                return {};  // Rückgabe eines leeren Objekts im Fehlerfall
            });
    }

    return (
        <div>
            <h1>Kalender-Ereignisse</h1>
            {events.length === 0 ? (
                <p>Keine Ereignisse gefunden.</p>
            ) : (
                events.map((item, index) => (
                    <div key={index}>
                        <p>{item.summary} @ {item.start.date}</p>
                    </div>
                ))
            )}
        </div>
    );
}