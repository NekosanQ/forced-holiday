const prompts = require('prompts');
const date: string = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
const fs = require("node:fs");

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'day',
        message: '休日にしますか？ (Y/n)',
        validate: (value: string) => value.toLowerCase() === 'y' || value.toLowerCase() === 'n' ? true : "yes(y) か no(n) で選んでください"
    });

    let day_of_week = response.day === 'y' ? '休日' : '平日';
    console.log(`今日は${day_of_week}です。`);
    fs.appendFile("logs/history.log", `[${date}] 今日は${day_of_week}です！\n`, (err: Error) => {
        if (err) throw err;
    })
})();