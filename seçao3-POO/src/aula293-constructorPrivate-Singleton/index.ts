// Singleton - GoF
export class DataBase {
  private static database: DataBase;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectando com ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): DataBase {
    if (DataBase.database) return DataBase.database;
    DataBase.database = new DataBase(host, user, password);
    return DataBase.database;
  }
}

const db = DataBase.getDatabase('localhost', 'root', '123456');
