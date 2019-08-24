import {
    englishAmountFormat,
    englishNumberFormat,
    englishToNepaliNumber,
    nepaliAmountFormat,
    nepaliNumberFormat,
    nepaliToEnglishNumber,
} from "../.."

console.log("English to Nepali Number:")
console.log(englishToNepaliNumber(123))
console.log(englishToNepaliNumber(123.233))
console.log(englishToNepaliNumber("12,34,56,789"))
console.log(englishToNepaliNumber("12,34,56,789.01"))
console.log(englishToNepaliNumber("10002002003004005006007008009"))
console.log(englishToNepaliNumber("Height of Mt. Everest: 8848m"))
console.log(englishToNepaliNumber("{}"))
console.log(englishToNepaliNumber("2075-02-15"))
console.log(englishToNepaliNumber("२३.२३३"))
console.log("\n\n")

console.log("Nepali to English Number:")
console.log(nepaliToEnglishNumber("१२३"))
console.log(nepaliToEnglishNumber("१२३.२३३"))
console.log(nepaliToEnglishNumber("१२,३४,५६,७८९"))
console.log(nepaliToEnglishNumber("१२,३४,५६,७८९.०१"))
console.log(nepaliToEnglishNumber("१०००२००२००३००४००५००६००७००८००९"))
console.log(nepaliToEnglishNumber("Height of Mt. Everest: ८८४८m"))
console.log(nepaliToEnglishNumber("{}"))
console.log(nepaliToEnglishNumber("२०७५-०२-१५"))
console.log(nepaliToEnglishNumber("23.233"))
console.log("\n\n")

console.log("Nepali Number Format:")
console.log(nepaliNumberFormat("१२३"))
console.log(nepaliNumberFormat("१२३.२३३"))
console.log(nepaliNumberFormat("१२,३४,५६,७८९"))
console.log(nepaliNumberFormat("१२३४५६७८९.०१"))
console.log(nepaliNumberFormat("१०००२००२००३००४००५००६००७००८००९"))
console.log(nepaliNumberFormat("Height of Mt. Everest: ८८४८m"))
console.log(nepaliNumberFormat("{}"))
console.log(nepaliNumberFormat("२०७५-०२-१५"))
console.log(nepaliNumberFormat("23.233"))
console.log("\n\n")

console.log("English Number Format:")
console.log(englishNumberFormat("१२३"))
console.log(englishNumberFormat("१२३.२३३"))
console.log(englishNumberFormat("१२,३४,५६,७८९"))
console.log(englishNumberFormat("१२३४५६७८९.०१"))
console.log(englishNumberFormat("१०००२००२००३००४००५००६००७००८००९"))
console.log(englishNumberFormat("Height of Mt. Everest: ८८४८m"))
console.log(englishNumberFormat("{}"))
console.log(englishNumberFormat("२०७५-०२-१५"))
console.log(englishNumberFormat("23.233"))
console.log("\n\n")

console.log("Nepali Amount Format:")
console.log(nepaliAmountFormat("१२३"))
console.log(nepaliAmountFormat("१२३.२३३"))
console.log(nepaliAmountFormat("१२,३४,५६,७८९"))
console.log(nepaliAmountFormat("१२३४५६७८९.०१"))
console.log(nepaliAmountFormat("१०००२००२००३००४००५००६००७००८००९"))
console.log(nepaliAmountFormat("Height of Mt. Everest: ८८४८m"))
console.log(nepaliAmountFormat("{}"))
console.log(nepaliAmountFormat("२०७५-०२-१५"))
console.log(nepaliAmountFormat("23.233"))
console.log("\n\n")

console.log("English Amount Format:")
console.log(englishAmountFormat("१२३"))
console.log(englishAmountFormat("१२३.२३३"))
console.log(englishAmountFormat("१२,३४,५६,७८९"))
console.log(englishAmountFormat("१२३४५६७८९.०१"))
console.log(englishAmountFormat("१०००२००२००३००४००५००६००७००८००९"))
console.log(englishAmountFormat("Height of Mt. Everest: ८८४८m"))
console.log(englishAmountFormat("{}"))
console.log(englishAmountFormat("२०७५-०२-१५"))
console.log(englishAmountFormat("23.233"))
console.log("\n\n")
