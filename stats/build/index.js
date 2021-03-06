"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { HtmlReport } from "./reportTargets/HtmlReport";
// Create an object that satisfies the 'DataReader' interface
// const csvFilereader = new CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfiying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFilereader);
// matchReader.load();
// Console Report
// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
// Html Report (creates an HTML file in root dir)
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// Final refactoring:
// Refactoring using the static method on MatchReader.ts
// bundles up the CsvFilereader instance
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// Refactoring to use the static method on Summary
// bundles up the class and instance creation more neatly
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Liverpool");
summary.buildAndPrintReport(matchReader.matches);
