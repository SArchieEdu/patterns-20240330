interface Builder {
  addBaseInfo(date: string, name: string): void;
  addAdditionalInfo(limit: number): void;
  addStorageInfo(level: number): void;
  getResult(): {};
}

class PdfBuilder implements Builder {
  result: Record<string, unknown>;

  addBaseInfo(date: string, name: string) {
    this.result.date = date;
    this.result.name = name;
  }

  addAdditionalInfo(limit: number) {
    this.result.limit = limit;
  }

  addStorageInfo(level: number) {
    this.result.level = level;
  }

  getResult() {
    const result = this.result;
    this.result = {};
    return result;
  }
}

class DocBuilder implements Builder {
  result: Record<string, unknown>;

  addBaseInfo(date: string, name: string) {
    this.result.date = `Date: ${date}`;
    this.result.name = name;
  }

  addAdditionalInfo(limit: number) {
    this.result.limit = limit;
  }

  addStorageInfo(level: number) {
    this.result.level = level;
  }

  getResult() {
    const result = this.result;
    this.result = {};
    return result;
  }
}
